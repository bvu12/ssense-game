import Card from "../Card/Card";
import { getSsenseImageUrl, getSsenseProductUrl } from "@/helpers";
import { MongoProduct } from "@/interfaces";
import { useEffect, useRef, useState } from "react";

type CarouselProps = {
  productsSeen: MongoProduct[];
};

// From: https://robkendal.co.uk/blog/how-to-build-a-multi-image-carousel-in-react-and-tailwind

const Carousel = ({ productsSeen }: CarouselProps) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<any>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    // We cap the number of times we can moveNext based on how many offsetWidths we've moved so far
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  // Move the scroll one offset
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  // On first render get the carousel element's total scrollable content width minus the currently visible offset width value
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth
  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel relative m-4 max-w-xs overflow-hidden sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
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
        className="carousel-container relative z-0 flex touch-pan-x snap-x snap-mandatory gap-5 overflow-y-hidden overflow-x-scroll scroll-smooth"
        // https://stackoverflow.com/questions/68658249/how-to-do-react-horizontal-scroll-using-mouse-wheel
        onWheel={(e) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          const el = e.currentTarget;
          el.scrollTo({
            left: e.deltaY < 0 ? el.scrollLeft - 250 : el.scrollLeft + 250,
            behavior: "auto",
          });
        }}
      >
        {productsSeen.map((product, index) => {
          return (
            <div
              key={index}
              className="carousel-item h-[750px] touch-pan-x snap-x snap-mandatory scroll-smooth transition delay-150 duration-300 ease-in-out hover:scale-110"
            >
              <a
                href={getSsenseProductUrl(product.productUrl)}
                className="z-0 block h-[400px] w-[175px] md:h-[550px] md:w-[250px] lg:h-[700px] lg:w-[300px] xl:w-[300px]"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Card
                  image_url={getSsenseImageUrl(product.imageUrl)}
                  brand_name={product.brand}
                  product_title={product.productName}
                  price={product.price}
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
