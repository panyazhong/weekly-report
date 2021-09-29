import XLSX from "xlsx";
import { Upload, Table, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";
import { useState } from "react";
import { ColumnsType } from "antd/es/table";

const { Dragger } = Upload;

interface dataItem {
  [key: string]: string | number;
}

const ExcelRead = () => {
  const [dataSource, setDataSource] = useState<dataItem[] | undefined>(
    undefined
  );
  const [columns, setColumns] = useState<any>();

  const props = {
    name: "file",
    multiple: true,
    action: "",
  };

  const fileChange = (e: UploadChangeParam) => {
    const { file } = e;
    const { status } = file;

    if (status === "done") {
      message.success(`${file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${file.name} file upload failed.`);
    }
    const reader = new FileReader();
    reader.readAsBinaryString((file as any).originFileObj);
    reader.onload = (e) => {
      const data = e.target?.result;

      const res = XLSX.read(data, {
        type: "binary",
      });

      const { SheetNames, Sheets } = res;

      SheetNames.forEach((name: string) => {
        const json: any[] = XLSX.utils.sheet_to_json(Sheets[name]);

        const keys = Object.keys(json[0]);
        const cols = keys.map((key: string) => {
          return {
            title: key,
            dataIndex: key,
            key: key,
            width: "100px",
          };
        });
        setColumns(cols);
        const data = json.slice(0, 10).map((item: any, index: number) => {
          const d = {
            key: index,
            ...item,
          };

          return d;
        });

        setDataSource(data);

        // const sheet = XLSX.utils.json_to_sheet(data);

        // const wb = XLSX.utils.book_new();

        // XLSX.utils.book_append_sheet(wb, sheet, "Sheet");

        // XLSX.writeFile(wb, "test.xlsx");
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
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ x: 1300 }}
        size={"small"}
        bordered
      />
      ;
    </div>
  );
};

export default ExcelRead;
