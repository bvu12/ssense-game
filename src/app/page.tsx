import Card from "@/components/Card/Card";

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
    <div className="flex h-screen gap-5 p-5">
      <Card
        image_url={image_url}
        brand_name={brand_name}
        product_title={product_title}
        price={price}
      />
      <Card
        image_url={image_url2}
        brand_name={brand_name}
        product_title={product_title}
      />
    </div>
  );
}
