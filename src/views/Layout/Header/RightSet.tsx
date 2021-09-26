import { Select } from "antd";
import { useContext } from "react";
import { DataContext, LocaleType } from "../index";

const { Option } = Select;

interface LanguageItem {
  name: string;
  val: string;
}

const RightSet = () => {
  const { locale, setLocale } = useContext(DataContext) as any;

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
  return (
    <div>
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
