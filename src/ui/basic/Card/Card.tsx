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
    <div className="h-[95%] w-full rounded object-fill shadow-xl">
      <div
        style={{ backgroundImage: `url(${image_url})` }}
        className="h-1/2 w-full rounded-md bg-contain bg-center bg-no-repeat md:h-2/3"
      >
        {is_clickable && clickable_element}
      </div>
      <div className="flex h-1/2 flex-col break-words px-4 py-3 md:h-1/3">
        <div className="mb-2 text-md font-bold">{brand_name}</div>
        <p className="text-sm flex-grow text-gray-700">{product_title}</p>
        {price && <p>{price}</p>}
      </div>
    </div>
  );
};

export default Card;
