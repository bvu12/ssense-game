import React, { Dispatch, SetStateAction, createContext } from "react";

import GameOverPage from "../GameOverPage/GameOverPage";
import GamePage from "../GamePage/GamePage";
import { MongoProduct } from "@/interfaces";
import { useState } from "react";

type SsenseHigherLowerGameProps = {
  products: MongoProduct[];
  isGameOver: boolean;
  setIsGameOver: Dispatch<SetStateAction<boolean>>;
  resetGame: () => void;
};

const SsenseHigherLowerGame = ({
  products,
  isGameOver,
  setIsGameOver,
  resetGame,
}: SsenseHigherLowerGameProps) => {
  const [productIndex, setProductIndex] = useState<number>(0);

  return (
    <>
      {isGameOver ? (
        <GameOverPage
          productsSeen={products.slice(0, productIndex + 1 + 1)}
          resetGame={resetGame}
        />
      ) : (
        <GamePage
          products={products}
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
          productIndex={productIndex}
          setProductIndex={setProductIndex}
        />
      )}
    </>
  );
};

export default SsenseHigherLowerGame;
