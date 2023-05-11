import React, { createContext } from "react";

import GameOverPage from "../GameOverPage/GameOverPage";
import GamePage from "../GamePage/GamePage";
import { Product } from "@/interfaces";
import { useState } from "react";

const useGameValues = () => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [productIndex, setProductIndex] = useState(0);

  return {
    isGameOver,
    setIsGameOver,
    productIndex,
    setProductIndex,
  };
};

export const GameStateContext = createContext(
  {} as ReturnType<typeof useGameValues>
);

type SsenseHigherLowerGameProps = {
  products: Product[];
};

const SsenseHigherLowerGame = ({ products }: SsenseHigherLowerGameProps) => {
  const { isGameOver, setIsGameOver, productIndex, setProductIndex } =
    useGameValues();

  return (
    <GameStateContext.Provider
      value={{ isGameOver, setIsGameOver, productIndex, setProductIndex }}
    >
      {isGameOver === true ? (
        <GameOverPage productsSeen={products.slice(0, productIndex + 1 + 1)} />
      ) : (
        <GamePage products={products} />
      )}
    </GameStateContext.Provider>
  );
};

export default SsenseHigherLowerGame;
