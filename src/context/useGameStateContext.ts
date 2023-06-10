import { MongoProduct } from "@/interfaces";
import { createContext, useState } from "react";

export const useGameState = () => {
  // Game state
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Products
  const [products, setProducts] = useState<MongoProduct[]>([]);
  const [productIndex, setProductIndex] = useState<number>(0);

  return {
    isGameOver,
    setIsGameOver,
    products,
    setProducts,
    productIndex,
    setProductIndex,
  };
};

export const GameStateContext = createContext(
  {} as ReturnType<typeof useGameState>
);
