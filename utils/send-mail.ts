import axios from "axios";

export const sendMail = async (recipientMail, name, senderMail, content) => {
  const data = {
    recipientMail,
    name,
    senderMail,
    content,
  };

  try {
    return await axios({
      method: "post",
      url: "/api/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
  } catch (error) {
    return error;
  }
};
