import { GameStateContext } from "@/context/useGameStateContext";
import { getSsenseImageUrl } from "@/helpers";
import { MongoProduct } from "@/interfaces";
import Card from "@/ui/basic/Card/Card";
import { useContext } from "react";

export type SelectProductsPageCardGroupProps = {
  givenProduct: MongoProduct;
  unknownProduct: MongoProduct;
  onGuessHigher: () => void;
  onGuessLower: () => void;
};

const SelectProductsPageCardGroup = ({
  givenProduct,
  unknownProduct,
  onGuessHigher,
  onGuessLower,
}: SelectProductsPageCardGroupProps) => {
  const { isGameOver } = useContext(GameStateContext);
  return (
    <div className="flex supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] flex-col items-center justify-center">
      <div className="mb-2 font-favorit text-xl font-black tracking-widest md:text-4xl">
        select the more expensive product
      </div>
      <div className="grid h-[75vh] w-[90vw] grid-cols-2 gap-4 md:h-[70vh] md:w-[70vw] md:gap-10 xl:w-[60vw]">
        <Card
          image_url={getSsenseImageUrl(givenProduct.imageUrl)}
          brand_name={givenProduct.brand}
          product_title={givenProduct.productName}
          price={givenProduct.price}
          on_click={() => onGuessLower()}
          isGameOver={isGameOver}
        />
        <Card
          image_url={getSsenseImageUrl(unknownProduct.imageUrl)}
          brand_name={unknownProduct.brand}
          product_title={unknownProduct.productName}
          price={""}
          on_click={() => onGuessHigher()}
          isGameOver={isGameOver}
        />
      </div>
    </div>
  );
};

export default SelectProductsPageCardGroup;
