export const sendMail = async () => {
  try {
    const emailPath = `/api/email`;
    const options = {
      method: "POST",
    };
    const newEmail = await fetch(emailPath, options);
    return newEmail;
  } catch (error) {
    throw new Error("No se envio el mail");
  }
};
