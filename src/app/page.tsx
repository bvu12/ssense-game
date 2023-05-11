"use client";

import { Product } from "@/interfaces";
import { useEffect, useState } from "react";
import MainPage from "@/ui/presentation/MainPage";
import { shuffle } from "@/helpers";
import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "react-use";

export default function Home() {
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
      // alert("Try again!");
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
      // alert("Try again!");
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
    <div>
      {isLoading ? (
        <h1>loading!</h1>
      ) : (
        <div>
          <MainPage
            product_a={products[productIndex]}
            product_b={products[productIndex + 1]}
            onGuessHigher={onGuessHigher}
            onGuessLower={onGuessLower}
            isShowingTransition={isShowingTransition}
          />
        </div>
      )}
    </div>
  );
}
