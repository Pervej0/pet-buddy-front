import { FieldValues } from "react-hook-form";

const convertToFormData = (values: FieldValues) => {
  const obj = { ...values };
  const modifyData = new FormData();
  if (values?.files) {
    const files = obj["files"];
    delete obj["files"];
    // for (let i = 0; i < files.length; i++) {
    //   console.log(files[i], "xyy");
    // }
    modifyData.append("file", files[0]);
    // modifyData.append("files", files as Blob);
  } else {
    const file = obj["file"];
    delete obj["file"];
    modifyData.append("file", file as Blob);
  }
  const data = JSON.stringify(obj);
  modifyData.append("data", data);
  return modifyData;
};

export default convertToFormData;
