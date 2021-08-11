import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "https://upcrate.art",
  consumerKey: "ck_d5165055d8c99dc5c682b59dd43155a2f14df688",
  consumerSecret: "cs_b7d992780c1c6596663752280259215cc617e926",
  version: "wc/v3",
});

export async function fetchCrates(offset?: number) {
  try {
    return await api.get("products", {
      per_page: 9,
      category: 49,
      ...(offset && { offset }),
    });
  } catch (error) {
    throw new Error(error);
  }
}
