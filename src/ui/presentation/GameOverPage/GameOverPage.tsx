import Carousel from "@/ui/basic/Carousel/Carousel";
import { Product } from "@/interfaces";

type GameOverPageProps = {
  productsSeen: Product[];
};

const GameOverPage = ({ productsSeen }: GameOverPageProps) => {
  return <Carousel productsSeen={productsSeen} />;
};

export default GameOverPage;
