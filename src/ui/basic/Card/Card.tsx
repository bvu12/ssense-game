export type CardProps = {
  image_url: string;
  brand_name: string;
  product_title: string;
  isGameOver: boolean;
  price?: string;
  on_click?: () => void;
};

const Card = ({
  image_url,
  brand_name,
  product_title,
  isGameOver,
  price,
  on_click,
}: CardProps) => {
  return (
    <div
      className="h-[95%] w-full cursor-pointer rounded object-fill font-favorit shadow-xl"
      onClick={on_click}
    >
      <div
        style={{ backgroundImage: `url(${image_url})` }}
        className={
          isGameOver
            ? "h-1/2 w-full rounded-md bg-contain bg-center bg-no-repeat md:h-2/3"
            : "h-1/2 w-full rounded-md bg-contain bg-center bg-no-repeat md:h-2/3 xl:h-3/4"
        }
      ></div>
      <div
        className={
          isGameOver
            ? "flex h-1/2 flex-col break-words px-4 py-3 md:h-1/3"
            : "flex h-1/2 flex-col break-words px-6 py-4 md:h-1/3 xl:h-1/4"
        }
      >
        <div
          className={
            isGameOver
              ? "text-md mb-2 font-bold uppercase"
              : "text-md mb-2 font-bold uppercase md:text-lg xl:text-xl"
          }
        >
          {brand_name}
        </div>
        <p
          className={
            isGameOver
              ? "flex-grow text-sm text-gray-700"
              : "text-md xl:text-md flex-grow text-gray-700 md:text-base"
          }
        >
          {product_title}
        </p>
        {price && (
          <p
            className={
              isGameOver ? "font-favorit-light" : "font-favorit-light text-lg"
            }
          >
            {price}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
