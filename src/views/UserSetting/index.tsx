import { Form, Input, Button, message } from 'antd';
import { useEffect, useRef } from 'react';
import { findOne, insert } from '../../utils/DB';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const UserSetting = () => {
  const userInfoRef = useRef<any>();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      username: 'dapan',
    });
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const userInfo = await findOne('SettingDB', {
      username: 'dapan',
    });
    userInfoRef.current = userInfo;
    if (userInfoRef.current) {
      form.setFieldsValue(userInfo);
    }
  };

  const submitForm = async (vals: any) => {
    try {
      const res = await insert('SettingDB', vals);
      console.log(res);
      message.success('add success');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={'user-info'}>
      <p className={'edit-title'}>信息编辑</p>
      <Form form={form} {...formItemLayout} onFinish={submitForm}>
        <Form.Item
          name="username"
          label="用户名"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input disabled value={'dapan'}></Input>
        </Form.Item>
        <Form.Item
          name="nickname"
          label="昵称"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          name="telephone"
          label="手机号"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            确认修改
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserSetting;
