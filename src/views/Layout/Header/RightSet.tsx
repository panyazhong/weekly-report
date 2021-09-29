import { Select, Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { DataContext, LocaleType } from "../index";
import { Link } from "react-router-dom";

const { Option } = Select;

interface LanguageItem {
  name: string;
  val: string;
}

const RightSet = () => {
  const { locale, setLocale, setUsername } = useContext<any>(DataContext);

  const Language: LanguageItem[] = [
    {
      name: "简体中文",
      val: LocaleType.zh_CN,
    },
    {
      name: "English",
      val: LocaleType.en,
    },
  ];

  const changeLocale = (val: LocaleType) => {
    setLocale(val);
  };

  const logOut = () => {
    setUsername("");
    sessionStorage.removeItem("userInfo");
  };

  const UserSetting = () => {
    return (
      <Menu>
        <Menu.Item key="0">
          <Link to={"/user-setting"}>个人设置</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <a onClick={logOut}>登出</a>
        </Menu.Item>
      </Menu>
    );
  };
  return (
    <div>
      <Dropdown overlay={UserSetting}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <Avatar
            style={{ cursor: "pointer", backgroundColor: "rgb(179, 212, 252)" }}
            icon={<UserOutlined />}
          />
        </a>
      </Dropdown>

      <Select bordered={false} onChange={changeLocale} value={locale}>
        {Language.map((lanaguage: LanguageItem) => {
          return (
            <Option value={lanaguage.val} key={lanaguage.val}>
              {lanaguage.name}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default RightSet;
