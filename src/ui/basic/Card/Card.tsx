import { ReactNode } from "react";

export type CardProps = {
  image_url: string;
  brand_name: string;
  product_title: string;
  isGameOver: boolean;
  price?: string;
  is_clickable?: boolean;
  clickable_element?: ReactNode;
};

const Card = ({
  image_url,
  brand_name,
  product_title,
  isGameOver,
  price,
  is_clickable,
  clickable_element,
}: CardProps) => {
  return (
    <div className="h-[95%] w-full rounded object-fill shadow-xl">
      <div
        style={{ backgroundImage: `url(${image_url})` }}
        className={
          isGameOver
            ? "h-1/2 w-full rounded-md bg-contain bg-center bg-no-repeat md:h-2/3"
            : "h-1/2 w-full rounded-md bg-contain bg-center bg-no-repeat md:h-3/4"
        }
      >
        {is_clickable && clickable_element}
      </div>
      <div
        className={
          isGameOver
            ? "flex h-1/2 flex-col break-words px-4 py-3 md:h-1/3"
            : "flex h-1/2 flex-col break-words px-6 py-4 md:h-1/4"
        }
      >
        <div
          className={
            isGameOver
              ? "mb-2 text-md font-bold"
              : "mb-2 text-lg font-bold md:text-xl lg:text-2xl"
          }
        >
          {brand_name}
        </div>
        <p
          className={
            isGameOver
              ? "text-sm flex-grow text-gray-700"
              : "text-md flex-grow text-gray-700 md:text-base lg:text-xl"
          }
        >
          {product_title}
        </p>
        {price && <p>{price}</p>}
      </div>
    </div>
  );
};

export default Card;
