import { Product } from "@/interfaces";
import Card from "../basic/Card/Card";
import ClickableCard from "../basic/Card/ClickableCard";

type MainPageProps = {
  product_a: Product;
  product_b: Product;
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

const MainPage = ({ product_a, product_b }: MainPageProps) => {
  return (
    <div className="flex h-screen gap-5 p-5 md:gap-10 md:p-10 xl:gap-10 2xl:px-44 2xl:py-24">
      <Card
        image_url={getSsenseImageUrl(product_a)}
        brand_name={product_a.brand.name.en}
        product_title={product_a.name.en}
        price={product_a.priceByCountry[0].regular}
      />
      <ClickableCard
        image_url={getSsenseImageUrl(product_b)}
        brand_name={product_b.brand.name.en}
        product_title={product_b.name.en}
        is_clickable={true}
        on_click_higher={() => alert("guessed higher")}
        on_click_lower={() => alert("gussed lower")}
      />
    </div>
  );
};

export default MainPage;
