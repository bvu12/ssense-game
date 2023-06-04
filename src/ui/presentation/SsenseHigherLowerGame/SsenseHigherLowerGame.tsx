import React, { useContext } from "react";

import GameOverPage from "../GameOverPage/GameOverPage";
import GamePage from "../GamePage/GamePage";
import {
  GameStateContext,
  useGameStateContext,
} from "@/context/useGameStateContext";

type SsenseHigherLowerGameProps = {
  resetGame: () => void;
};

const SsenseHigherLowerGame = ({ resetGame }: SsenseHigherLowerGameProps) => {
  const { isGameOver, products, productIndex } = useContext(GameStateContext);

  return (
    <>
      {isGameOver ? (
        <GameOverPage
          productsSeen={products.slice(0, productIndex + 1 + 1)}
          resetGame={resetGame}
        />
      ) : (
        <GamePage />
      )}
    </>
  );
};

export default SsenseHigherLowerGame;
