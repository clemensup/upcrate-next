import axios from "axios";

//TODO:
export async function addMember(email_address: string) {
  try {
    return await axios({
      method: "post",
      url: "/api/mailchimp",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email_address,
      },
    });
  } catch (error) {
    return error;
  }
}
