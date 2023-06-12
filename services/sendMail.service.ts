import { NEXT_PUBLIC_SERVER } from "@/lib/constants";

export const sendMail = async () => {
  try {
    const emailPath = `${NEXT_PUBLIC_SERVER}/api/email`;
    const options = {
      method: "POST",
    };
    const newEmail = await fetch(emailPath, options);
    if (!newEmail.ok) {
      throw new Error("Algo salio mal");
    }
    return newEmail;
  } catch (error) {
    throw new Error("No se envio el mail");
  }
};
