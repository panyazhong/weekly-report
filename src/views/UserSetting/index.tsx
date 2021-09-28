import { Form, Input } from "antd";

const UserSetting = () => {
  const [form] = Form.useForm();
  return (
    <div>
      <Form form={form}>
        <Form.Item
          name="username"
          label="用户名"
          rules={[
            {
              required: true,
              message: "Please enter username",
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserSetting;
