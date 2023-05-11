import { NextApiResponse, NextApiRequest } from "next";
import { ssense_products } from "@/backend/ssense_products";
import { Product } from "@/interfaces";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  return res.status(200).json(ssense_products);
}
