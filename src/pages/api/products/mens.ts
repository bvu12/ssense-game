import { getProducts } from "./mixed";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const products = await getProducts({ $match: { gender: "men" } });
    res.json(products);
  } catch (e) {
    console.error(e);
  }
};
