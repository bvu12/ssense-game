import Carousel from "@/ui/basic/Carousel/Carousel";
import { Product } from "@/interfaces";

type GameOverPageProps = {
  productsSeen: Product[];
};

const GameOverPage = ({ productsSeen }: GameOverPageProps) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="m-auto">
        <div className="text-center text-4xl font-black tracking-widest">
          GAMEOVER
        </div>
        <Carousel productsSeen={productsSeen} />
      </div>
    </div>
  );
};

export default GameOverPage;
