"use client";

import { GameStateContext, useGameState } from "@/context/useGameStateContext";
import { ProductType, getRandomProductAPISuffix } from "@/helpers";
import { Spinner } from "@/ui/basic/Spinner/Spinner";
import SsenseHigherLowerGame from "@/ui/presentation/SsenseHigherLowerGame/SsenseHigherLowerGame";
import { useEffect, useState } from "react";

export default function Home() {
  const {
    isGameOver,
    setIsGameOver,
    products,
    setProducts,
    productIndex,
    setProductIndex,
  } = useGameState();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [gameType, setGameType] = useState<string>();

  const fetchProducts = async (productAPISuffix: string) => {
    setIsLoading(true);
    const res = await fetch(
      "http://localhost:3000/api/products/" + productAPISuffix
    );
    const data = await res.json();
    setProductIndex(0);
    setProducts(data);
    setIsLoading(false);
    setIsGameOver(false);
  };

  const fetchMoreProducts = () => {
    // As the game progresses, keep fetching more products on an interval in the background
    if (productIndex > 0 && productIndex % 5 == 0) {
      fetch("http://localhost:3000/api/products/" + gameType)
        .then((res) => res.json())
        .then((data) => setProducts((products) => [...products, ...data]));
    }
  };

  const startGame = (productAPISuffix: string) => {
    setGameType(productAPISuffix);
    fetchProducts(productAPISuffix);
  };

  useEffect(() => {
    startGame(getRandomProductAPISuffix());
  }, []);

  const resetGameMixed = () => {
    startGame(ProductType.MIXED);
  };

  const resetGameWomens = () => {
    startGame(ProductType.WOMENS);
  };

  const resetGameMens = () => {
    startGame(ProductType.MENS);
  };

  const resetGame = {
    resetGameMixed,
    resetGameWomens,
    resetGameMens,
  };

  return (
    <GameStateContext.Provider
      value={{
        isGameOver,
        setIsGameOver,
        products,
        setProducts,
        productIndex,
        setProductIndex,
      }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <SsenseHigherLowerGame
          resetGame={resetGame}
          fetchMoreProducts={fetchMoreProducts}
        />
      )}
    </GameStateContext.Provider>
  );
}
