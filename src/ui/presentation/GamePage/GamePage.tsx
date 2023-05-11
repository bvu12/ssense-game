import { useContext, useState } from "react";

import GamePageCardGroup from "./GamePageCardGroup";
import GamePageTransitionCheck from "./GamePageTransitionCheck";
import { GameStateContext } from "../SsenseHigherLowerGame/SsenseHigherLowerGame";
import { Product } from "@/interfaces";
import { useTimeoutFn } from "react-use";

export type GamePageProps = {
  products: Product[];
};

const GamePage = ({ products }: GamePageProps) => {
  const { isGameOver, setIsGameOver, productIndex, setProductIndex } =
    useContext(GameStateContext);
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
        unknownProduct.priceByCountry[0].regular,
        givenProduct.priceByCountry[0].regular
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
      <GamePageTransitionCheck isShowingTransition={isShowingTransition} />
    </div>
  );
};

export default GamePage;
