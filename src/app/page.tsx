"use client";

import { GameStateContext, useGameState } from "@/context/useGameStateContext";
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

  const startGame = async () => {
    const res = await fetch("http://localhost:3000/api/products/");
    const data = await res.json();
    setProductIndex(0);
    setProducts(data);
    setIsLoading(false);
    setIsGameOver(false);
  };

  useEffect(() => {
    startGame();
  }, []);

  const resetGame = () => {
    startGame();
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
