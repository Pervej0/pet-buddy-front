import axios from "axios";
import { FieldValues } from "react-hook-form";

const uploadToImageBB = async (files: FieldValues) => {
  const modifyData = new FormData();
  let imageUrls = [];
  let deleteUrls = [];
  for (let i = 0; i < files?.length; i++) {
    modifyData.append("image", files[i]);
    const { data } = await axios.post(
      process.env.IMAGE_HOST as string,
      modifyData
    );
    imageUrls.push(data.data.display_url);
    deleteUrls.push(data.data.delete_url);
  }

  return { imageUrls, deleteUrls };
};

export default uploadToImageBB;
