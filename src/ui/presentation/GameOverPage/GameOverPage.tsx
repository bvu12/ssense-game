import { MongoProduct } from "@/interfaces";
import Carousel from "@/ui/basic/Carousel/Carousel";

type GameOverPageProps = {
  productsSeen: MongoProduct[];
  resetGame: () => void;
};

const GameOverPage = ({ productsSeen, resetGame }: GameOverPageProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-4 mb-2 md:mt-8 md:mb-4 text-2xl md:text-4xl font-black tracking-widest">
        GAMEOVER
      </div>
      <button
        className="mb-2 md:mb-4 text-lg md:text-2xl font-light tracking-widest"
        onClick={() => resetGame()}
      >
        RESET GAME
      </button>
      <Carousel productsSeen={productsSeen} />
    </div>
  );
};

export default GameOverPage;
