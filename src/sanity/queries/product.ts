// sanity/queries/product.ts
import { client } from "@/sanity/lib/client";
import { IProduct } from "@/types";

export const getProducts = async (): Promise<IProduct[]> => {
  const query = `*[_type == "product"][1...9] {
    _id,
    title,
    description,
    price,
      "imageUrl": productImage.asset->url,
  }`;
  
  return await client.fetch(query);
};