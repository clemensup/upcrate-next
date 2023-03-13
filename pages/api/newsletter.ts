export default async function newsletter(req, res) {
  const { email } = req.body;

  try {
    const response = await fetch(
      "https://shop.upcrate.art/wp-json/upcrate/v1/add-subscriber",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();

    if (!data.success) {
      return res.status(200).json(data);
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ success: false, data: error.message });
  }
}
