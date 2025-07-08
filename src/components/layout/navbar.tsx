import Link from "next/link"
import { Container } from "../container/container"

type TProps = {
  menu: {
    title: string,
    href: string
  }[]
}

export const Navbar = ({ menu }:TProps) => {
  return (
    <div className="fixed top-0 h-[var(--navbar-height)] w-full bg-black flex flex-row items-center text-white">
      <Container>
        <div className="flex flex-row items-center justify-between">
          <span className="uppercase font-bold text-lg">Велдинг тайм</span>

          {menu && (
            <ul className="flex flex-row gap-4">
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
          )}

          <div className="flex flex-col items-end">
            <Link
              className="text-sm" 
              href={'mailto:weldingtimeby@gmail.com'}
            >
              weldingtimeby@gmail.com
            </Link>

            <div className="flex flex-row items-center">
              <Link 
                className="text-sm" 
                href={'tel:+375298124972'}
              >
                +375298124972
              </Link>
              &#44;&nbsp;
              <Link 
                className="text-sm" 
                href={'tel:+375298117093'}
              >
                +375298117093
              </Link>	
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}