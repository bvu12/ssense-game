import { MongoProduct } from "@/interfaces";
import Carousel from "@/ui/basic/Carousel/Carousel";

type GameOverPageProps = {
  productsSeen: MongoProduct[];
  resetGame: {
    resetGameSameSettings: () => void;
    resetGameMixed: () => void;
    resetGameWomens: () => void;
    resetGameMens: () => void;
  };
};

const GameOverPage = ({ productsSeen, resetGame }: GameOverPageProps) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="my-2 font-favorit text-xl font-black tracking-widest md:my-4 md:text-4xl">
        GAMEOVER
      </div>
      <div className="flex gap-2 md:gap-5">
        <button
          className="mb-2 text-center font-favorit-light text-lg md:mb-4 md:text-2xl"
          onClick={() => resetGame.resetGameSameSettings()}
        >
          RESET GAME
        </button>
        <button
          className="mb-2 font-favorit-light text-lg font-light tracking-widest underline hover:decoration-[3px] md:mb-4 md:text-xl"
          onClick={() => resetGame.resetGameMens()}
        >
          MENS
        </button>
        <button
          className="mb-2 font-favorit-light text-lg font-light tracking-widest underline hover:decoration-[3px] md:mb-4 md:text-xl"
          onClick={() => resetGame.resetGameWomens()}
        >
          WOMENS
        </button>
        <button
          className="mb-2 font-favorit-light text-lg font-light tracking-widest underline hover:decoration-[3px] md:mb-4 md:text-xl"
          onClick={() => resetGame.resetGameMixed()}
        >
          MIXED
        </button>
      </div>
      <Carousel productsSeen={productsSeen} />
    </div>
  );
};

export default GameOverPage;
