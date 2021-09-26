import XLSX from "xlsx";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";
import { type } from "os";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
};

const ExcelRead = () => {
  const fileChange = (e: UploadChangeParam) => {
    const { file } = e;

    const reader = new FileReader();
    console.log(file);
    reader.readAsBinaryString((file as any).originFileObj);
    reader.onload = (e) => {
      const data = e.target?.result;

      const res = XLSX.read(data, {
        type: "binary",
      });

      const { SheetNames, Sheets } = res;

      console.log(Sheets["待办事项"]);
      // SheetNames.forEach((name: string) => {
      //   const json = XLSX.utils.sheet_to_json(Sheets[name]);
      // });
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
    </div>
  );
};

export default ExcelRead;
