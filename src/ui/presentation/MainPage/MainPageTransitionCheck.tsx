import { Transition } from "@headlessui/react";

export type MainPageTransitionCheckProps = {
  isShowingTransition: boolean;
};

const MainPageTransitionCheck = ({
  isShowingTransition,
}: MainPageTransitionCheckProps) => {
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
          {/* From https://www.svgrepo.com/svg/436687/checkmark-circle-fill */}
          <svg
            fill="green"
            viewBox="-5.6 -5.6 67.20 67.20"
            xmlns="http://www.w3.org/2000/svg"
            stroke="green"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 24.7655 40.0234 C 23.9687 40.0234 23.3593 39.6719 22.6796 38.8750 L 15.9296 30.5312 C 15.5780 30.0859 15.3671 29.5234 15.3671 29.0078 C 15.3671 27.9063 16.2343 27.0625 17.2655 27.0625 C 17.9452 27.0625 18.5077 27.3203 19.0702 28.0469 L 24.6718 35.2890 L 35.5702 17.8281 C 36.0155 17.1016 36.6249 16.75 37.2343 16.75 C 38.2655 16.75 39.2733 17.4297 39.2733 18.5547 C 39.2733 19.0703 38.9687 19.6328 38.6640 20.1016 L 26.7577 38.8750 C 26.2421 39.6484 25.5858 40.0234 24.7655 40.0234 Z"></path>
            </g>
          </svg>
        </Transition>
      </div>
    </div>
  );
};

export default MainPageTransitionCheck;
