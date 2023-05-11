"use client";

import Card, { CardProps } from "./Card";

import React from "react";

type ClickableButtonGroupProps = {
  on_click_higher: () => void;
  on_click_lower: () => void;
};

const ClickableButtonGroup = ({
  on_click_higher,
  on_click_lower,
}: ClickableButtonGroupProps) => {
  return (
    <div className="h-full p-12">
      <button
        onClick={on_click_higher}
        className="h-2/5 w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-4 hover:scale-110 hover:bg-white hover:bg-opacity-25"
      >
        Higher
      </button>
      <div className="h-1/5"></div>
      <button
        onClick={on_click_lower}
        className="h-2/5 w-full transition delay-150 duration-300 ease-in-out hover:translate-y-4 hover:scale-110 hover:bg-white hover:bg-opacity-25"
      >
        Lower
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
    />
  );
};

export default ClickableCard;
