import { MongoProduct } from "@/interfaces";
import Carousel from "@/ui/basic/Carousel/Carousel";

type GameOverPageProps = {
  productsSeen: MongoProduct[];
  resetGame: {
    resetGameMixed: () => void;
    resetGameWomens: () => void;
    resetGameMens: () => void;
  };
};

const GameOverPage = ({ productsSeen, resetGame }: GameOverPageProps) => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="mt-4 mb-2 md:mt-8 md:mb-4 text-2xl md:text-4xl font-black tracking-widest">
        GAMEOVER
      </div>
      <div className="flex gap-5">
        <div className="mb-2 md:mb-4 text-md md:text-2xl font-light tracking-tight">
          RESET GAME
        </div>
        <button
          className="mb-2 underline hover:decoration-4 md:mb-4 text-md md:text-2xl font-light tracking-widest"
          onClick={() => resetGame.resetGameMixed()}
        >
          MIXED
        </button>
        <button
          className="mb-2 underline hover:decoration-4 md:mb-4 text-md md:text-2xl font-light tracking-widest"
          onClick={() => resetGame.resetGameMens()}
        >
          MENS
        </button>
        <button
          className="mb-2 underline hover:decoration-4 md:mb-4 text-md md:text-2xl font-light tracking-widest"
          onClick={() => resetGame.resetGameWomens()}
        >
          WOMENS
        </button>
      </div>
      <Carousel productsSeen={productsSeen} />
    </div>
  );
};

export default GameOverPage;
