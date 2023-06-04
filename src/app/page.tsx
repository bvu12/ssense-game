"use client";

import { createContext, useEffect } from "react";

import SsenseHigherLowerGame from "@/ui/presentation/SsenseHigherLowerGame/SsenseHigherLowerGame";
import { Spinner } from "@/ui/basic/Spinner/Spinner";
import {
  GameStateContext,
  useGameStateContext,
} from "@/context/useGameStateContext";

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
  } = useGameStateContext();

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
