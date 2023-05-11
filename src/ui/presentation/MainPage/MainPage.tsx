import MainPageCardGroup, { MainPageCardGroupProps } from "./MainPageCardGroup";
import MainPageTransitionCheck, {
  MainPageTransitionCheckProps,
} from "./MainPageTransitionCheck";

export type MainPageProps = MainPageCardGroupProps &
  MainPageTransitionCheckProps;

const MainPage = ({
  givenProduct,
  unknownProduct,
  onGuessHigher,
  onGuessLower,
  isShowingTransition,
}: MainPageProps) => {
  return (
    <div className="relative">
      <MainPageCardGroup
        givenProduct={givenProduct}
        unknownProduct={unknownProduct}
        onGuessHigher={onGuessHigher}
        onGuessLower={onGuessLower}
      />
      <MainPageTransitionCheck isShowingTransition={isShowingTransition} />
    </div>
  );
};

export default MainPage;
