"use client";

import { useEffect, useState } from "react";

import { MongoProduct } from "@/interfaces";
import SsenseHigherLowerGame from "@/ui/presentation/SsenseHigherLowerGame/SsenseHigherLowerGame";
import { Spinner } from "@/ui/basic/Spinner/Spinner";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<MongoProduct[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const startGame = async () => {
    const res = await fetch("http://localhost:3000/api/products/");
    const data = await res.json();
    // setProducts(shuffle(data)); // Data is pre-shuffled
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    startGame();
  }, []);

  const resetGame = () => {
    startGame();
    setIsGameOver(false);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <SsenseHigherLowerGame
          products={products}
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
          resetGame={resetGame}
        />
      )}
    </>
  );
}
