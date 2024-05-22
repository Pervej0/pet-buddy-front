"use server";

import { FieldValues } from "react-hook-form";

const registerUser = async (data: FieldValues) => {
  const response = await fetch(`${process.env.BACK_END_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

export default registerUser;
