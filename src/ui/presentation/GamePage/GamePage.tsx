import GamePageCardGroup, { GamePageCardGroupProps } from "./GamePageCardGroup";
import GamePageTransitionCheck, {
  GamePageTransitionCheckProps,
} from "./GamePageTransitionCheck";

export type GamePageProps = GamePageCardGroupProps &
  GamePageTransitionCheckProps;

const GamePage = ({
  givenProduct,
  unknownProduct,
  onGuessHigher,
  onGuessLower,
  isShowingTransition,
}: GamePageProps) => {
  return (
    <div className="relative">
      <GamePageCardGroup
        givenProduct={givenProduct}
        unknownProduct={unknownProduct}
        onGuessHigher={onGuessHigher}
        onGuessLower={onGuessLower}
      />
      <GamePageTransitionCheck isShowingTransition={isShowingTransition} />
    </div>
  );
};

export default GamePage;
