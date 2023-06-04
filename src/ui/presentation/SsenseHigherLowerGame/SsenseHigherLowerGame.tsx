import GameOverPage from "../GameOverPage/GameOverPage";
import SelectProductsPage from "../SelectProductsPage/SelectProductsPage";
import { GameStateContext } from "@/context/useGameStateContext";
import { useContext } from "react";

type SsenseHigherLowerGameProps = {
  resetGame: {
    resetGameMixed: () => void;
    resetGameWomens: () => void;
    resetGameMens: () => void;
  };
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
        <SelectProductsPage />
      )}
    </>
  );
};

export default SsenseHigherLowerGame;
