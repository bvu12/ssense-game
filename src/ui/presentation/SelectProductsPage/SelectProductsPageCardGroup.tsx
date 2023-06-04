import { getSsenseImageUrl } from "@/helpers";
import { MongoProduct } from "@/interfaces";
import Card from "@/ui/basic/Card/Card";
import ClickableCard from "@/ui/basic/Card/ClickableCard";

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
  return (
    <div className="flex h-screen gap-5 p-5 md:gap-10 md:p-10 xl:gap-10 2xl:px-44 2xl:py-24">
      <Card
        image_url={getSsenseImageUrl(givenProduct.imageUrl)}
        brand_name={givenProduct.brand}
        product_title={givenProduct.productName}
        price={givenProduct.price}
      />
      <ClickableCard
        image_url={getSsenseImageUrl(unknownProduct.imageUrl)}
        brand_name={unknownProduct.brand}
        product_title={unknownProduct.productName}
        is_clickable={true}
        on_click_higher={() => onGuessHigher()}
        on_click_lower={() => onGuessLower()}
      />
    </div>
  );
};

export default SelectProductsPageCardGroup;