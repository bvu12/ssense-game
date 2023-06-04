import { ReactNode } from "react";

export type CardProps = {
  image_url: string;
  brand_name: string;
  product_title: string;
  price?: string;
  is_clickable?: boolean;
  clickable_element?: ReactNode;
};

const Card = ({
  image_url,
  brand_name,
  product_title,
  price,
  is_clickable,
  clickable_element,
}: CardProps) => {
  return (
    <div className="h-full w-full rounded object-fill shadow-xl">
      <div
        style={{ backgroundImage: `url(${image_url})` }}
        className="h-1/2 w-full rounded-md bg-contain bg-center bg-no-repeat md:h-3/4"
      >
        {is_clickable && clickable_element}
      </div>
      <div className="flex h-1/2 flex-col break-words px-6 py-4 md:h-1/4">
        <div className="mb-2 text-lg font-bold md:text-xl lg:text-2xl">
          {brand_name}
        </div>
        <p className="text-md flex-grow text-gray-700 md:text-base lg:text-xl">
          {product_title}
        </p>
        {price && <p>{price}</p>}
      </div>
    </div>
  );
};

export default Card;
