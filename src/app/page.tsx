"use client";

import { GameStateContext, useGameState } from "@/context/useGameStateContext";
import { ProductType, getRandomProductAPISuffix } from "@/helpers";
import { Spinner } from "@/ui/basic/Spinner/Spinner";
import SsenseHigherLowerGame from "@/ui/presentation/SsenseHigherLowerGame/SsenseHigherLowerGame";
import { useEffect } from "react";

export default function Home() {
  const {
    isLoading,
    setIsLoading,
    isGameOver,
    setIsGameOver,
    products,
    setProducts,
    productIndex,
    setProductIndex,
  } = useGameState();

  const startGame = async (productAPISuffix: string) => {
    const res = await fetch(
      "http://localhost:3000/api/products/" + productAPISuffix
    );
    const data = await res.json();
    setProductIndex(0);
    setProducts(data);
    setIsLoading(false);
    setIsGameOver(false);
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
        isLoading,
        setIsLoading,
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
        <SsenseHigherLowerGame resetGame={resetGame} />
      )}
    </GameStateContext.Provider>
  );
}
