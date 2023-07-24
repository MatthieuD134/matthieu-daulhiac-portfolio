import ArrowDownIcon from '../icons/arrow-down-icon';

export default function AnimatedSlideIcon() {
  return (
    <div className="relative w-8 h-16 border-solid border border-2 rounded-full border-black dark:border-white">
      <div className="absolute w-full animate-slider">
        <ArrowDownIcon className="mx-auto" />
      </div>
    </div>
  );
}
