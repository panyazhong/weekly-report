import XLSX from "xlsx";
import { Upload, Table } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";
import { useState } from "react";
import { ColumnsType } from "antd/es/table";

const { Dragger } = Upload;

interface dataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<dataItem> = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];

const ExcelRead = () => {
  const [dataSource, setDataSource] = useState<dataItem[] | undefined>(
    undefined
  );

  const props = {
    name: "file",
    multiple: true,
    action: "",
  };

  const fileChange = (e: UploadChangeParam) => {
    const { file } = e;

    const reader = new FileReader();
    reader.readAsBinaryString((file as any).originFileObj);
    reader.onload = (e) => {
      const data = e.target?.result;

      const res = XLSX.read(data, {
        type: "binary",
      });

      const { SheetNames, Sheets } = res;

      SheetNames.forEach((name: string) => {
        const json = XLSX.utils.sheet_to_json(Sheets[name]);
        console.log(json);
        const data = json.map((item: any, index: number) => {
          const d: dataItem = {
            key: index,
            name: item["姓名"],
            age: item["年龄"],
            address: item["班级"],
          };

          return d;
        });

        setDataSource(data);
      });
    };
  };

  return (
    <div>
      <div className={"upload-box"}>
        <Dragger {...props} onChange={fileChange}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
      </div>
      <Table<dataItem>
        dataSource={dataSource}
        columns={columns}
        size={"small"}
        bordered
      />
      ;
    </div>
  );
};

export default ExcelRead;
