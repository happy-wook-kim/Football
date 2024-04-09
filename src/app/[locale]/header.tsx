
import Image from "next/image"
import { useDarkMode } from "../../../lib/hooks/useDarkMode"
import Link from "next/link"
import { useTranslations } from "next-intl";

export default function Header () {
  const [theme, changeTheme] = useDarkMode()
  const t = useTranslations('header')

  return (
    <div className="p-4 flex justify-between">
      <Image
      src="/vercel.svg"
      alt="logo"
      width={50}
      height={30} 
      />
      <Link href="/">{t('1')}</Link>
      <span onClick={changeTheme} className={theme + ' cursor-pointer'}>{theme}</span>
    </div>
  )
}