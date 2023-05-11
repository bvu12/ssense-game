import Carousel from "@/ui/basic/Carousel/Carousel";
import { Product } from "@/interfaces";
import { getSsenseImageUrl } from "@/helpers";

type GameOverPageProps = {
  productsSeen: Product[];
};

const GameOverPage = ({ productsSeen }: GameOverPageProps) => {
  const slide_urls = productsSeen.map((product) => getSsenseImageUrl(product));

  return <Carousel slide_urls={slide_urls} />;
};

export default GameOverPage;
