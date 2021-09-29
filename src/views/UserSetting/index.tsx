import { Form, Input, Button } from "antd";
import { useEffect, useRef, useState } from "react";

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const UserSetting = () => {
  const userInfoRef = useRef<any>();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      username: "dapan",
    });
    getUserInfo();

    if (userInfoRef.current) {
      form.setFieldsValue(JSON.parse(userInfoRef.current));
    }
  }, []);

  const getUserInfo = () => {
    const info = sessionStorage.getItem("userInfo");
    userInfoRef.current = info;
  };

  const submitForm = (vals: any) => {
    sessionStorage.setItem("userInfo", JSON.stringify(vals));
  };

  return (
    <div className={"user-info"}>
      <p className={"edit-title"}>信息编辑</p>
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
          <Input disabled value={"dapan"}></Input>
        </Form.Item>
        <Form.Item
          name="nickanme"
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
