import { Transition } from "@headlessui/react";

export type SelectProductsPageTransitionAnimationProps = {
  isShowingTransition: boolean;
  isGameOver: boolean;
};

const Checkmark = () => {
  // From https://www.svgrepo.com/svg/436687/checkmark-circle-fill
  return (
    <svg
      fill="green"
      viewBox="-5.6 -5.6 67.20 67.20"
      xmlns="http://www.w3.org/2000/svg"
      stroke="green"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 24.7655 40.0234 C 23.9687 40.0234 23.3593 39.6719 22.6796 38.8750 L 15.9296 30.5312 C 15.5780 30.0859 15.3671 29.5234 15.3671 29.0078 C 15.3671 27.9063 16.2343 27.0625 17.2655 27.0625 C 17.9452 27.0625 18.5077 27.3203 19.0702 28.0469 L 24.6718 35.2890 L 35.5702 17.8281 C 36.0155 17.1016 36.6249 16.75 37.2343 16.75 C 38.2655 16.75 39.2733 17.4297 39.2733 18.5547 C 39.2733 19.0703 38.9687 19.6328 38.6640 20.1016 L 26.7577 38.8750 C 26.2421 39.6484 25.5858 40.0234 24.7655 40.0234 Z"></path>
      </g>
    </svg>
  );
};

const Cross = () => {
  return (
    <svg
      fill="red"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      stroke="red"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 19.5858 38.4063 C 18.4843 38.4063 17.5936 37.5156 17.5936 36.4141 C 17.5936 35.8750 17.8280 35.4063 18.2030 35.0547 L 25.1874 28.0234 L 18.2030 20.9922 C 17.8280 20.6641 17.5936 20.1719 17.5936 19.6328 C 17.5936 18.5547 18.4843 17.6875 19.5858 17.6875 C 20.1249 17.6875 20.5936 17.8984 20.9452 18.2734 L 27.9765 25.2812 L 35.0546 18.25 C 35.4530 17.8281 35.8749 17.6406 36.3905 17.6406 C 37.4921 17.6406 38.3827 18.5312 38.3827 19.6094 C 38.3827 20.1484 38.1952 20.5937 37.7968 20.9688 L 30.7655 28.0234 L 37.7733 35.0078 C 38.1249 35.3828 38.3593 35.8516 38.3593 36.4141 C 38.3593 37.5156 37.4687 38.4063 36.3671 38.4063 C 35.8046 38.4063 35.3358 38.1719 34.9843 37.8203 L 27.9765 30.7890 L 20.9921 37.8203 C 20.6405 38.1953 20.1249 38.4063 19.5858 38.4063 Z"></path>
      </g>
    </svg>
  );
};

const SelectProductsPageTransitionAnimation = ({
  isShowingTransition,
  isGameOver,
}: SelectProductsPageTransitionAnimationProps) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <div className="h-32 w-32">
        <Transition
          show={isShowingTransition}
          enter="transition-all duration-[800ms] ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all duration-[600ms] ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {!isGameOver && <Checkmark />}
          {isGameOver && <Cross />}
        </Transition>
      </div>
    </div>
  );
};

export default SelectProductsPageTransitionAnimation;
