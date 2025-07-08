'use client'
import Link from "next/link"

type TProps = {
  menu: {
    title: string,
    href: string
  }[],
  open: boolean
}

export const NavbarMenu = ({ menu, open }:TProps) => {
  return (
    <ul 
      className={
        "overflow-hidden transition-all absolute lg:static flex flex-col lg:flex-row gap-4 w-full lg:w-fit bg-black top-[var(--navbar-height)] left-0 px-4 " +
        (open ? "max-h-[1000px] py-4" : "max-h-[0px] lg:max-h-[var(--navbar-height)] lg:h-auto py-0") 
      }
    >
      {
        menu.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              {item.title}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}