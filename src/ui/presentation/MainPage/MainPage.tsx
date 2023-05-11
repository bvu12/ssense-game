import MainPageCardGroup, { MainPageCardGroupProps } from "./MainPageCardGroup";
import MainPageTransitionCheck, {
  MainPageTransitionCheckProps,
} from "./MainPageTransitionCheck";

export type MainPageProps = MainPageCardGroupProps &
  MainPageTransitionCheckProps;

const MainPage = ({
  product_a,
  product_b,
  onGuessHigher,
  onGuessLower,
  isShowingTransition,
}: MainPageProps) => {
  return (
    <div className="relative">
      <MainPageCardGroup
        product_a={product_a}
        product_b={product_b}
        onGuessHigher={onGuessHigher}
        onGuessLower={onGuessLower}
      />
      <MainPageTransitionCheck isShowingTransition={isShowingTransition} />
    </div>
  );
};

export default MainPage;
