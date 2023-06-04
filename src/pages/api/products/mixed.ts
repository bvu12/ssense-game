import { MongoProduct } from "@/interfaces";
import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const products = await getProducts({
      $match: { gender: { $exists: true } },
    });
    res.json(products);
  } catch (e) {
    console.error(e);
  }
};

export async function getProducts(match: any) {
  const client = await clientPromise;
  const db = client.db("ssense-game");

  const products = await db
    .collection<MongoProduct>("products")
    .aggregate([match, { $sample: { size: 50 } }])
    .toArray();

  return products;
}
