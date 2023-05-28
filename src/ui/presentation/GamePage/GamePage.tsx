import { Dispatch, SetStateAction, useContext, useState } from "react";

import GamePageCardGroup from "./GamePageCardGroup";
import GamePageTransitionCheckmark from "./GamePageTransitionCheckmark";
import { MongoProduct } from "@/interfaces";
import { useTimeoutFn } from "react-use";
import { getNumericPrice } from "@/helpers";

export type GamePageProps = {
  products: MongoProduct[];
  isGameOver: boolean;
  setIsGameOver: Dispatch<SetStateAction<boolean>>;
  productIndex: number;
  setProductIndex: Dispatch<SetStateAction<number>>;
};

const GamePage = ({
  products,
  isGameOver,
  setIsGameOver,
  productIndex,
  setProductIndex,
}: GamePageProps) => {
  const givenProduct = products[productIndex];
  const unknownProduct = products[productIndex + 1];

  const [isShowingTransition, setIsShowingTransition] = useState(false);
  let [, , resetIsShowingTransition] = useTimeoutFn(
    () => setIsShowingTransition(false),
    1000
  );

  function guessHandler(comparator: {
    (a: number, b: number): boolean;
    (arg0: number, arg1: number): any;
  }) {
    if (
      comparator(
        getNumericPrice(unknownProduct.price),
        getNumericPrice(givenProduct.price)
      )
    ) {
      setIsShowingTransition((isShowingTransition) => !isShowingTransition);
      resetIsShowingTransition();
      setProductIndex((previousProductIndex) => previousProductIndex + 1);
    } else {
      setIsGameOver(true);
    }
  }

  function onGuessHigher() {
    // Guess that the unknown product is higher in price than the given product
    guessHandler((a: number, b: number) => a >= b);
  }

  function onGuessLower() {
    // Guess that the unknown product is lower in price than the given product
    guessHandler((a: number, b: number) => a <= b);
  }

  return (
    <div className="relative">
      <GamePageCardGroup
        givenProduct={givenProduct}
        unknownProduct={unknownProduct}
        onGuessHigher={onGuessHigher}
        onGuessLower={onGuessLower}
      />
      <GamePageTransitionCheckmark isShowingTransition={isShowingTransition} />
    </div>
  );
};

export default GamePage;
