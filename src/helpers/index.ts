import { Product } from "@/interfaces";

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
export function shuffle<T>(arr: Array<T>) {
  var j, x, index;
  for (index = arr.length - 1; index > 0; index--) {
    j = Math.floor(Math.random() * (index + 1));
    x = arr[index];
    arr[index] = arr[j];
    arr[j] = x;
  }
  return arr;
}

export function getSsenseImageUrl(product: Product) {
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
