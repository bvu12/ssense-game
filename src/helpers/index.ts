export function getSsenseProductUrl(url_stub: string) {
    // url_stub is is in the form of: /men/product/parajumpers/black-trident-sweatshirt/12747441
    const base_product_url = "https://www.ssense.com";
  
    return base_product_url + url_stub;
  }
  
export function getSsenseImageUrl(imageUrl: string) {
    const base_image_url =
      "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best";
  
    // imageUrl is in the form of: /231924M176013_1/stutterheim-beige-stockholm-coat.jpg
    return base_image_url + imageUrl;
  }
  