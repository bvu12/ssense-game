"use client";

import { useEffect, useState } from "react";

import GamePage from "@/ui/presentation/GamePage/GamePage";
import { Product } from "@/interfaces";
import { shuffle } from "@/helpers";
import { useTimeoutFn } from "react-use";

export default function Home() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [isShowingTransition, setIsShowingTransition] = useState(false);
  let [, , resetIsShowingTransition] = useTimeoutFn(
    () => setIsShowingTransition(false),
    1000
  );

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [productIndex, setProductIndex] = useState(0);

  function onGuessHigher() {
    const product_a = products[productIndex];
    const product_b = products[productIndex + 1];

    if (
      product_b.priceByCountry[0].regular >= product_a.priceByCountry[0].regular
    ) {
      setIsShowingTransition((isShowingTransition) => !isShowingTransition);
      resetIsShowingTransition();
      setProductIndex((previousProductIndex) => previousProductIndex + 1);
    } else {
      setIsGameOver(true);
    }
  }

  function onGuessLower() {
    const product_a = products[productIndex];
    const product_b = products[productIndex + 1];
    if (
      product_b.priceByCountry[0].regular <= product_a.priceByCountry[0].regular
    ) {
      setIsShowingTransition((isShowingTransition) => !isShowingTransition);
      resetIsShowingTransition();
      setProductIndex((previousProductIndex) => previousProductIndex + 1);
    } else {
      setIsGameOver(true);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3001/api/products");
      const data = await res.json();
      setProducts(shuffle(data));
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>loading!</h1>
      ) : isGameOver ? (
        <h1>gameover!</h1>
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
}
