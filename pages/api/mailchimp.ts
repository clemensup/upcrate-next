import * as client from "@mailchimp/mailchimp_marketing";

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us19",
});

export default async (req: { body: { email_address: string } }, res) => {
  const { email_address } = req.body;

  if (!email_address) {
    res.status(403).send("Empty email address");
  }

  try {
    const response = await client.lists.addListMember("122b5ff888", {
      email_address,
      status: "subscribed",
    });

    res.status(200).send(response);
  } catch (error) {
    res.status(200).send(error.response.body);
  }
};
