import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: process.env.WC_API_URL!,
  consumerKey: process.env.WC_API_CONSUMER_KEY!,
  consumerSecret: process.env.WC_API_CONSUMER_SECRET!,
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts(options: { category?: string }) {
  try {
    const response = await api.get("products", { per_page: 100, ...options });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
