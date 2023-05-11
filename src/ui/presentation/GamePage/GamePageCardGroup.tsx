import Card from "@/ui/basic/Card/Card";
import ClickableCard from "@/ui/basic/Card/ClickableCard";
import { Product } from "@/interfaces";
import { getSsenseImageUrl } from "@/helpers";

export type GamePageCardGroupProps = {
  givenProduct: Product;
  unknownProduct: Product;
  onGuessHigher: () => void;
  onGuessLower: () => void;
};

const GamePageCardGroup = ({
  givenProduct,
  unknownProduct,
  onGuessHigher,
  onGuessLower,
}: GamePageCardGroupProps) => {
  return (
    <div className="flex h-screen gap-5 p-5 md:gap-10 md:p-10 xl:gap-10 2xl:px-44 2xl:py-24">
      <Card
        image_url={getSsenseImageUrl(givenProduct)}
        brand_name={givenProduct.brand.name.en}
        product_title={givenProduct.name.en}
        price={givenProduct.priceByCountry[0].regular}
      />
      <ClickableCard
        image_url={getSsenseImageUrl(unknownProduct)}
        brand_name={unknownProduct.brand.name.en}
        product_title={unknownProduct.name.en}
        is_clickable={true}
        on_click_higher={() => onGuessHigher()}
        on_click_lower={() => onGuessLower()}
      />
    </div>
  );
};

export default GamePageCardGroup;
