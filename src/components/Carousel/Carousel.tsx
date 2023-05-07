import { useEffect, useState } from "react";

type CarouselProps = {
  slide_urls: string[];
  auto_slide?: boolean;
  auto_slide_interval?: number;
};

// Followed tutorial: https://www.youtube.com/watch?v=XJSOgV4VELk

const Carousel = ({
  slide_urls,
  auto_slide = false,
  auto_slide_interval = 3000,
}: CarouselProps) => {
  const images = slide_urls.map((s, i) => {
    return <img key={i} src={s} />;
  });

  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!auto_slide) return;
    const slide_interval = setInterval(next, auto_slide_interval);
    return () => clearInterval(slide_interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full bg-white/80 p-1 text-gray-800 opacity-80 shadow hover:bg-white"
        >
          left
        </button>
        <button
          onClick={next}
          className="rounded-full bg-white/80 p-1 text-gray-800 opacity-80 shadow hover:bg-white"
        >
          right
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => {
            return (
              <div
                key={i}
                className={`h-3 w-3 rounded-full bg-white transition-all ${
                  curr === i ? "p-2" : "bg-opacity-50"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
