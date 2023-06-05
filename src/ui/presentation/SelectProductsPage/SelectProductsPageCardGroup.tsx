import { GameStateContext } from "@/context/useGameStateContext";
import { getSsenseImageUrl } from "@/helpers";
import { MongoProduct } from "@/interfaces";
import Card from "@/ui/basic/Card/Card";
import ClickableCard from "@/ui/basic/Card/ClickableCard";
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
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-8 mt-6 text-xl font-black tracking-widest md:text-2xl">
        HIGHER OR LOWER
      </div>
      <div className=" grid  h-[90vh] w-[80vw] grid-cols-2 gap-5 md:h-[70vh] md:w-[70vw] md:gap-10 xl:w-[60vw]">
        <Card
          image_url={getSsenseImageUrl(givenProduct.imageUrl)}
          brand_name={givenProduct.brand}
          product_title={givenProduct.productName}
          price={givenProduct.price}
          isGameOver={isGameOver}
        />
        <ClickableCard
          image_url={getSsenseImageUrl(unknownProduct.imageUrl)}
          brand_name={unknownProduct.brand}
          product_title={unknownProduct.productName}
          is_clickable={true}
          on_click_higher={() => onGuessHigher()}
          on_click_lower={() => onGuessLower()}
          isGameOver={isGameOver}
        />
      </div>
    </div>
  );
};

export default SelectProductsPageCardGroup;
