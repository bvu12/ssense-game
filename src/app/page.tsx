"use client";

import { useEffect, useState } from "react";

import { MongoProduct } from "@/interfaces";
import SsenseHigherLowerGame from "@/ui/presentation/SsenseHigherLowerGame/SsenseHigherLowerGame";
import { shuffle } from "@/helpers";
import { Spinner } from "@/ui/basic/Spinner/Spinner";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<MongoProduct[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/products/");
      const data = await res.json();
      // setProducts(shuffle(data)); // Data is pre-shuffled
      setProducts(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? <Spinner /> : <SsenseHigherLowerGame products={products} />}
    </>
  );
}
