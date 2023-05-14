"use client";

import { useEffect, useState } from "react";

import { Product } from "@/interfaces";
import SsenseHigherLowerGame from "@/ui/presentation/SsenseHigherLowerGame/SsenseHigherLowerGame";
import { shuffle } from "@/helpers";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();
      setProducts(shuffle(data));
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>loading!</h1>
      ) : (
        <SsenseHigherLowerGame products={products} />
      )}
    </>
  );
}
