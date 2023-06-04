import { createContext, useState } from "react";

import { MongoProduct } from "@/interfaces";

export const useGameState = () => {
    // Game state
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
  
    // Products
    const [products, setProducts] = useState<MongoProduct[]>([]);
    const [productIndex, setProductIndex] = useState<number>(0);
  
    return {
      isLoading,
      setIsLoading,
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
  