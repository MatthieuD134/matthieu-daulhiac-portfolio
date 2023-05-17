import { useRouter } from 'next/router';

export default function LanguageSelector() {
  const router = useRouter();

  return (
    <select className="">
      <option>{router.locale}</option>
      {router.locales
        ?.filter((loc) => loc !== router.locale)
        .map((loc) => (
          <option key={loc}>{loc}</option>
        ))}
    </select>
  );
}
