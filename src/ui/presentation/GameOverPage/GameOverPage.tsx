import Carousel from "@/ui/basic/Carousel/Carousel";
import { MongoProduct } from "@/interfaces";

type GameOverPageProps = {
  productsSeen: MongoProduct[];
  resetGame: () => void;
};

const GameOverPage = ({ productsSeen, resetGame }: GameOverPageProps) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="m-auto">
        <div className="text-center text-4xl font-black tracking-widest">
          GAMEOVER
        </div>
        <button onClick={() => resetGame()}>RESET GAME</button>
        <Carousel productsSeen={productsSeen} />
      </div>
    </div>
  );
};

export default GameOverPage;
