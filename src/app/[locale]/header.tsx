
import Image from "next/image"
import { useDarkMode } from "../../../lib/hooks/useDarkMode"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl";

export default function Header () {
  const [theme, changeTheme] = useDarkMode()
  const t = useTranslations('header')
  const locale = useLocale()

  const links = [
    {
      link: '/leagues',
    },{
      link: '/leagues',
    },{
      link: '/leagues',
    }
  ]

  return (
    <div className="p-4 flex justify-between">
      <section className="flex">
        <Image
        src="/vercel.svg"
        alt="logo"
        width={50}
        height={30} 
        />
        {links.map((data,i) => (
          <Link href={`${locale}/${data.link}`} key={i}>{t(`${i+1}`)}</Link>
        ))}
      </section>
      <section className="flex">
        <span onClick={changeTheme} className={theme + ' cursor-pointer'}>{theme}</span>
      </section>
    </div>
  )
}