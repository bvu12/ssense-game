import { MongoProduct } from "@/interfaces";
import { createContext, useState } from "react";

interface ScoreState {
  currentScore: number;
  hiScore: number;
}

export const useGameState = () => {
  // Game state
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Products
  const [products, setProducts] = useState<MongoProduct[]>([]);
  const [productIndex, setProductIndex] = useState<number>(0);

  // Highscore
  const [score, setScore] = useState<ScoreState>({
    currentScore: 0,
    hiScore: 0,
  });

  return {
    isGameOver,
    setIsGameOver,
    products,
    setProducts,
    productIndex,
    setProductIndex,
    score,
    setScore,
  };
};

export const GameStateContext = createContext(
  {} as ReturnType<typeof useGameState>
);
