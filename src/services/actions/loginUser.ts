"use server";

import { FieldValues } from "react-hook-form";

const loginUser = async (data: FieldValues) => {
  const response = await fetch(`${process.env.BACK_END_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
    // cache: "no-store",
  });
  const result = await response.json();
  return result;
};

export default loginUser;
