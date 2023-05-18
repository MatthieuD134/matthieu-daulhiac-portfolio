export default function AnimatedSlideIcon() {
  return (
    <div className="relative w-8 h-16 border-solid border rounded-full border-black dark:border-white">
      <div className="absolute m-2 w-1/2 aspect-square bg-black dark:bg-white rounded-full animate-slider" />
    </div>
  );
}
