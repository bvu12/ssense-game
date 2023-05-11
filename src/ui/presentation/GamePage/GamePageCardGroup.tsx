import Card from "@/ui/basic/Card/Card";
import ClickableCard from "@/ui/basic/Card/ClickableCard";
import { Product } from "@/interfaces";

export type GamePageCardGroupProps = {
  givenProduct: Product;
  unknownProduct: Product;
  onGuessHigher: () => void;
  onGuessLower: () => void;
};

function getSsenseImageUrl(product: Product) {
  const base_image_url =
    "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/";

  // cdn is in the form of: "https://res.cloudinary.com/ssenseweb/image/upload/__IMAGE_PARAMS__/231837M237028_1.jpg"
  let from_ssense_cdn = product.image[0].split("/").pop(); // "231837M237028_1.jpg"
  from_ssense_cdn = from_ssense_cdn?.split(".")[0]; // "231837M237028_1"

  // product_url is in the form of: "/men/product/salomon/red-xt-4-og-sneakers/11869861"
  let product_url = product.url.split("/");
  const brand_name_for_url = product_url[3]; // "salomon"
  const product_name_for_url = product_url[4]; // "red-xt-4-og-sneakers"

  // url required is in the form of: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/231559M166014_1/<literally anything goes here but it's typically brandname-productname>.jpg"
  let suffix = "/" + brand_name_for_url + "-" + product_name_for_url + ".jpg";
  return base_image_url + from_ssense_cdn + suffix;
}

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
