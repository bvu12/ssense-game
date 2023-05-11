import GameOverPage from "../GameOverPage/GameOverPage";
import GamePage from "../GamePage/GamePage";
import { Product } from "@/interfaces";
import { useState } from "react";
import { useTimeoutFn } from "react-use";

type SsenseHigherLowerGameProps = {
  products: Product[];
};

const SsenseHigherLowerGame = ({ products }: SsenseHigherLowerGameProps) => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [productIndex, setProductIndex] = useState(0);

  const [isShowingTransition, setIsShowingTransition] = useState(false);
  let [, , resetIsShowingTransition] = useTimeoutFn(
    () => setIsShowingTransition(false),
    1000
  );

  function guessHandler(comparator: {
    (a: number, b: number): boolean;
    (arg0: number, arg1: number): any;
  }) {
    const givenProduct = products[productIndex];
    const unknownProduct = products[productIndex + 1];

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
      // setIsGameOver(true);
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
    <>
      {isGameOver ? (
        <GameOverPage />
      ) : (
        <GamePage
          givenProduct={products[productIndex]}
          unknownProduct={products[productIndex + 1]}
          onGuessHigher={onGuessHigher}
          onGuessLower={onGuessLower}
          isShowingTransition={isShowingTransition}
        />
      )}
    </>
  );
};

export default SsenseHigherLowerGame;
