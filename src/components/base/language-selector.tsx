import useOnClickOutside from '@/hooks/use-on-click-outside';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export default function LanguageSelector() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const [extend, setExtend] = useState<boolean>(false);

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    if (isHovering || isFocused) {
      setExtend(true);
    } else {
      setExtend(false);
    }
  }, [isHovering, isFocused]);

  useOnClickOutside(ref, () => extend && setExtend(false));

  const handleChangeLocale = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
    setExtend(false);
  };

  return (
    <div
      className="flex flex-col w-10 h-10 relative mx-2"
      ref={ref}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <button
        className="absolute z-10 w-full h-full rounded-full uppercase bg-surface dark:bg-dark-surface text-black dark:text-white"
        onClick={(e) => {
          e.currentTarget.blur();
          setExtend((state) => !state);
        }}
      >
        {router.locale}
      </button>
      {router.locales
        ?.filter((loc) => loc !== router.locale)
        .map((loc, index) => (
          <button
            className={`absolute w-full h-full rounded-full bg-green-500 uppercase ${
              extend
                ? index === 0
                  ? `translate-y-[100%]`
                  : `translate-y-[200%]`
                : 'translate-y-[0]'
            } transition-all duration-500 ease-in-out bg-surface dark:bg-dark-surface text-black dark:text-white`}
            key={loc}
            onClick={(e) => {
              e.currentTarget.blur();
              handleChangeLocale(loc);
            }}
          >
            {loc}
          </button>
        ))}
    </div>
  );
}
