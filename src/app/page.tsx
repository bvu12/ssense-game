"use client";

import Card from "@/components/Card/Card";
import ClickableCard from "@/components/Card/ClickableCard";

export default function Home() {
  const image_url =
    "https://upload.wikimedia.org/wikipedia/commons/0/02/Red_Circle%28small%29.svg";
  const image_url2 =
    "https://images.unsplash.com/photo-1675714203232-683124186564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80";
  const brand_name = "Long ass name for a brandsfhdsjkfhjksdhfjksdh";
  const product_title =
    "Long ass name of a product thurighfdkjshljkasbfjksdkjfhadskjfhksdahfkjsdahkfh";
  const price = 1590;
  return (
    <div className="flex h-screen gap-5 p-5 md:gap-10 md:p-10 xl:gap-10 2xl:px-44 2xl:py-24">
      <Card
        image_url={image_url}
        brand_name={brand_name}
        product_title={product_title}
        price={price}
      />
      <ClickableCard
        image_url={image_url2}
        brand_name={brand_name}
        product_title={product_title}
        is_clickable={true}
        on_click_higher={() => alert("guessed higher")}
        on_click_lower={() => alert("gussed lower")}
      />
    </div>
  );
}
