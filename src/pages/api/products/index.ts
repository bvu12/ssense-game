import { NextApiRequest, NextApiResponse } from "next";

import { MongoProduct } from "@/interfaces";
import clientPromise from "@/lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
   try {
       const client = await clientPromise;
       const db = client.db("ssense-game");

       const products = await db
           .collection<MongoProduct>("mens")
           .aggregate([{ $sample: { size: 12 } }])
           .toArray();

       res.json(products);
   } catch (e) {
       console.error(e);
   }
};