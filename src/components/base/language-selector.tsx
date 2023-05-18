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
      className="flex flex-col relative m-2"
      ref={ref}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <button
        className="w-10 h-10 rounded-full bg-blue-500 uppercase"
        onClick={() => setExtend((state) => !state)}
      >
        {router.locale}
      </button>
      <span
        className={`absolute top-10 grid transition-[grid-template-rows] ${
          extend ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        } `}
      >
        <span className="flex flex-col overflow-hidden">
          {router.locales
            ?.filter((loc) => loc !== router.locale)
            .map((loc) => (
              <button
                className="w-10 h-10 rounded-full bg-blue-500 uppercase"
                key={loc}
                onClick={() => handleChangeLocale(loc)}
              >
                {loc}
              </button>
            ))}
        </span>
      </span>
    </div>
  );
}
