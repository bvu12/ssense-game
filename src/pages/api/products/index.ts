import { NextApiRequest, NextApiResponse } from "next";

import { Product } from "@/interfaces";
import { ssense_products } from "@/backend/ssense_products";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  return res.status(200).json(ssense_products);
}
