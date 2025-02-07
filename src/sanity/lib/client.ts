import { createClient } from "@sanity/client";

export const client = createClient({
  token: process.env.SANITY_ACCESS_TOKEN,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-12-30",
  useCdn: true,
});

export async function fetchProducts() {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  return products;
}

