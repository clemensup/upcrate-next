import axios from "axios";

export async function addMember(email_address: string) {
  try {
    const response = await axios({
      method: "post",
      url: "/api/mailchimp",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email_address,
      },
    });

    return response;
  } catch (error) {
    return error;
  }
}
