"use client";

import { Product } from "@/interfaces";
import { useEffect, useState } from "react";
import MainPage from "@/ui/presentation/MainPage";
import { shuffle } from "@/helpers";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3001/api/products");
      const data = await res.json();
      setProducts(shuffle(data));
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>loading!</h1>
      ) : (
        <MainPage
          product_a={products[productIndex]}
          product_b={products[productIndex + 1]}
        />
      )}
    </div>
  );
}
