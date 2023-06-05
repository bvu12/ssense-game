"use client";

import Card, { CardProps } from "./Card";

type ClickableButtonGroupProps = {
  on_click_higher: () => void;
  on_click_lower: () => void;
};

const ClickableButtonGroup = ({
  on_click_higher,
  on_click_lower,
}: ClickableButtonGroupProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10">
      <button
        onClick={on_click_higher}
        className="rounded border border-slate-500 bg-black bg-opacity-[65%] px-4 py-2 text-xl font-bold text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-4 hover:scale-110 hover:bg-opacity-100"
      >
        Guess Higher
      </button>
      <button
        onClick={on_click_lower}
        className="rounded border border-slate-500 bg-black bg-opacity-[65%] px-4 py-2 text-xl font-bold text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-4 hover:scale-110 hover:bg-opacity-100"
      >
        Guess Lower
      </button>
    </div>
  );
};

type ClickableCardProps = CardProps & ClickableButtonGroupProps;

const ClickableCard = ({
  image_url,
  brand_name,
  product_title,
  on_click_higher,
  on_click_lower,
  isGameOver,
}: ClickableCardProps) => {
  const clickable_button_group = (
    <ClickableButtonGroup
      on_click_higher={on_click_higher}
      on_click_lower={on_click_lower}
    />
  );

  return (
    <Card
      image_url={image_url}
      brand_name={brand_name}
      product_title={product_title}
      is_clickable={true}
      clickable_element={clickable_button_group}
      isGameOver={isGameOver}
    />
  );
};

export default ClickableCard;
