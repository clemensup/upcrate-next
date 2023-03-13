import axios from "axios";

export async function addMember(email: string) {
  try {
    const response = await axios({
      method: "post",
      url: "/api/newsletter",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
      },
    });

    console.log(response.data);

    return response;
  } catch (error) {
    return error;
  }
}
