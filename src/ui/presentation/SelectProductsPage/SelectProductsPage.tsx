import { GameStateContext } from "@/context/useGameStateContext";
import { MongoProduct } from "@/interfaces";
import { useContext, useState } from "react";
import { useTimeoutFn } from "react-use";
import SelectProductsPageCardGroup from "./SelectProductsPageCardGroup";
import SelectProductsPageTransitionAnimation from "./SelectProductsPageTransitionAnimation";

type SelectProductsPageProps = {
  fetchMoreProducts: () => void;
};

const SelectProductsPage = ({ fetchMoreProducts }: SelectProductsPageProps) => {
  const {
    isGameOver,
    setIsGameOver,
    products,
    productIndex,
    setProductIndex,
    setScore,
  } = useContext(GameStateContext);

  const givenProduct = products[productIndex];
  const unknownProduct = products[productIndex + 1];

  const TRANSITION_TIME_MS = 500;
  const [isShowingTransition, setIsShowingTransition] =
    useState<boolean>(false);
  const [transitionGameOver, setTransitionGameOver] =
    useState<boolean>(isGameOver); // Decouples from the parent GameOver state so we can display an animation before moving to the GAMEOVER screen
  let [, , resetIsShowingTransition] = useTimeoutFn(
    () => setIsShowingTransition(false),
    TRANSITION_TIME_MS
  );

  function guessHandler(comparator: {
    (a: number, b: number): boolean;
    (arg0: number, arg1: number): any;
  }) {
    setIsShowingTransition((isShowingTransition) => !isShowingTransition);
    resetIsShowingTransition();
    if (
      !comparator(
        getNumericPrice(unknownProduct.price),
        getNumericPrice(givenProduct.price)
      ) ||
      isNoMoreProducts(products, productIndex)
    ) {
      setTransitionGameOver(true);
      setTimeout(() => setIsGameOver(true), TRANSITION_TIME_MS * 1.1);
    } else {
      setScore((prevScore) => ({
        currentScore: prevScore.currentScore + 1,
        hiScore: Math.max(prevScore.hiScore, prevScore.currentScore + 1),
      }));
      setProductIndex((previousProductIndex) => previousProductIndex + 1);
      fetchMoreProducts();
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
      <SelectProductsPageCardGroup
        givenProduct={givenProduct}
        unknownProduct={unknownProduct}
        onGuessHigher={onGuessHigher}
        onGuessLower={onGuessLower}
      />
      <SelectProductsPageTransitionAnimation
        isShowingTransition={isShowingTransition}
        isGameOver={transitionGameOver}
      />
    </div>
  );
};

export default SelectProductsPage;

function getNumericPrice(price: string) {
  // price is in the form of $X
  let priceWithNoSign = price.substring(1);
  return Number(priceWithNoSign);
}
function isNoMoreProducts(
  products: MongoProduct[],
  productIndex: number
): boolean {
  const rightProductIndex = productIndex + 1;
  const totalNumberOfProductsZeroIndexed = products.length - 1;
  return rightProductIndex >= totalNumberOfProductsZeroIndexed;
}
