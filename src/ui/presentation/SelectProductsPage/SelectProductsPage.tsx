import SelectProductsPageCardGroup from "./SelectProductsPageCardGroup";
import SelectProductsPageTransitionCheckmark from "./SelectProductsPageTransitionCheckmark";
import { GameStateContext } from "@/context/useGameStateContext";
import { MongoProduct } from "@/interfaces";
import { useContext, useState } from "react";
import { useTimeoutFn } from "react-use";

const SelectProductsPage = ({}) => {
  const { setIsGameOver, products, productIndex, setProductIndex } =
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
      !comparator(
        getNumericPrice(unknownProduct.price),
        getNumericPrice(givenProduct.price)
      ) ||
      isNoMoreProducts(products, productIndex)
    ) {
      setIsGameOver(true);
    } else {
      setIsShowingTransition((isShowingTransition) => !isShowingTransition);
      resetIsShowingTransition();
      setProductIndex((previousProductIndex) => previousProductIndex + 1);
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
      <SelectProductsPageTransitionCheckmark
        isShowingTransition={isShowingTransition}
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
