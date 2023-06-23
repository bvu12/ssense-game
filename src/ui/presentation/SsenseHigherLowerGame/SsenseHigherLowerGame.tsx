import { GameStateContext } from "@/context/useGameStateContext";
import { useContext } from "react";
import GameOverPage from "../GameOverPage/GameOverPage";
import SelectProductsPage from "../SelectProductsPage/SelectProductsPage";

type SsenseHigherLowerGameProps = {
  resetGame: {
    resetGameSameSettings: () => void;
    resetGameMixed: () => void;
    resetGameWomens: () => void;
    resetGameMens: () => void;
  };
  fetchMoreProducts: () => void;
};

const SsenseHigherLowerGame = ({
  resetGame,
  fetchMoreProducts,
}: SsenseHigherLowerGameProps) => {
  const { isGameOver, products, productIndex } = useContext(GameStateContext);

  return (
    <>
      {isGameOver ? (
        <GameOverPage
          productsSeen={products.slice(0, productIndex + 1 + 1)}
          resetGame={resetGame}
        />
      ) : (
        <SelectProductsPage fetchMoreProducts={fetchMoreProducts} />
      )}
    </>
  );
};

export default SsenseHigherLowerGame;
