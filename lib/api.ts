const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = { variables: {} }) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviousCrates() {
  const data = await fetchAPI(
    `
    query MyQuery {
        products(where: {categoryId: 49}) {
          edges {
            node {
              id
              name
              link
              image {
                mediaItemUrl
              }
            }
          }
        }
      }
      `
  );

  console.log(data.products);

  return data.products;
}
