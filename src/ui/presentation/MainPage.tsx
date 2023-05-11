import { Product } from "@/interfaces";
import Card from "../basic/Card/Card";
import ClickableCard from "../basic/Card/ClickableCard";
import { Transition } from "@headlessui/react";

type MainPageProps = {
  product_a: Product;
  product_b: Product;
  onGuessHigher: () => void;
  onGuessLower: () => void;
  isShowingTransition: boolean;
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

const MainPage = ({
  product_a,
  product_b,
  onGuessHigher,
  onGuessLower,
  isShowingTransition,
}: MainPageProps) => {
  return (
    <div className="relative">
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
          on_click_higher={() => onGuessHigher()}
          on_click_lower={() => onGuessLower()}
        />
      </div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform
"
      >
        <div className="h-32 w-32">
          <Transition
            show={isShowingTransition}
            enter="transition-all duration-[800ms] ease-in-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all duration-[600ms] ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* From https://www.svgrepo.com/svg/436687/checkmark-circle-fill */}
            <svg
              fill="green"
              viewBox="-5.6 -5.6 67.20 67.20"
              xmlns="http://www.w3.org/2000/svg"
              stroke="green"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 24.7655 40.0234 C 23.9687 40.0234 23.3593 39.6719 22.6796 38.8750 L 15.9296 30.5312 C 15.5780 30.0859 15.3671 29.5234 15.3671 29.0078 C 15.3671 27.9063 16.2343 27.0625 17.2655 27.0625 C 17.9452 27.0625 18.5077 27.3203 19.0702 28.0469 L 24.6718 35.2890 L 35.5702 17.8281 C 36.0155 17.1016 36.6249 16.75 37.2343 16.75 C 38.2655 16.75 39.2733 17.4297 39.2733 18.5547 C 39.2733 19.0703 38.9687 19.6328 38.6640 20.1016 L 26.7577 38.8750 C 26.2421 39.6484 25.5858 40.0234 24.7655 40.0234 Z"></path>
              </g>
            </svg>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
