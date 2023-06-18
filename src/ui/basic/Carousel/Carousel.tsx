import { GameStateContext } from "@/context/useGameStateContext";
import { getSsenseImageUrl, getSsenseProductUrl } from "@/helpers";
import { MongoProduct } from "@/interfaces";
import { useContext, useEffect, useRef, useState } from "react";
import Card from "../Card/Card";

type CarouselProps = {
  productsSeen: MongoProduct[];
};

// From: https://robkendal.co.uk/blog/how-to-build-a-multi-image-carousel-in-react-and-tailwind

const Carousel = ({ productsSeen }: CarouselProps) => {
  const maxScrollWidth = useRef(0);
  const [scrollLeft, setSetScrollLeft] = useState(0);
  const carousel = useRef<any>(null);

  const { isGameOver } = useContext(GameStateContext);

  const movePrev = () => {
    if (carousel.current !== null && scrollLeft > 0) {
      const newScrollLeft = Math.max(
        0,
        scrollLeft - carousel.current.offsetWidth
      );
      setSetScrollLeft(newScrollLeft);
      carousel.current.scrollLeft = newScrollLeft;
    }
  };

  const moveNext = () => {
    if (carousel.current !== null && scrollLeft <= maxScrollWidth.current) {
      const newScrollLeft = Math.min(
        maxScrollWidth.current,
        scrollLeft + carousel.current.offsetWidth
      );
      setSetScrollLeft(newScrollLeft);
      carousel.current.scrollLeft = newScrollLeft;
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return scrollLeft == 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return scrollLeft >= maxScrollWidth.current;
    }

    return false;
  };

  // On first render get the carousel element's total scrollable content width minus the currently visible offset width value
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth
  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel relative m-4 max-w-xs overflow-x-hidden sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <div className="carousel-button top left absolute flex h-full w-full justify-between">
        <button
          onClick={movePrev}
          className="z-10 m-0 h-full w-10 p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out hover:bg-blue-900/75 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
          disabled={isDisabled("prev")}
        >
          Prev
        </button>
        <button
          onClick={moveNext}
          className="z-10 m-0 h-full w-10 p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out hover:bg-blue-900/75 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
          disabled={isDisabled("next")}
        >
          Next
        </button>
      </div>
      <div
        ref={carousel}
        className="carousel-container relative z-0 flex touch-pan-x snap-x snap-mandatory gap-5 overflow-y-hidden overflow-x-scroll scroll-smooth px-8"
        // https://stackoverflow.com/questions/68658249/how-to-do-react-horizontal-scroll-using-mouse-wheel
        onScroll={(el) => {
          const newScrollLeft = (el.target as HTMLElement).scrollLeft;
          setSetScrollLeft(newScrollLeft);
        }}
      >
        {productsSeen.map((product, index) => {
          return (
            <div
              key={index}
              className="carousel-item h-[100%] touch-pan-x snap-x snap-mandatory scroll-smooth transition delay-150 duration-300 ease-in-out hover:scale-110"
            >
              <a
                href={getSsenseProductUrl(product.productUrl)}
                className="z-0 block h-[75vh] max-h-96 w-[175px] lg:w-[250px]"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Card
                  image_url={getSsenseImageUrl(product.imageUrl)}
                  brand_name={product.brand}
                  product_title={product.productName}
                  price={product.price}
                  isGameOver={isGameOver}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
