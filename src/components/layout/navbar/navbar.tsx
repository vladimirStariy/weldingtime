'use client'
import Link from "next/link"
import { Container } from "../../container/container"
import { NavbarMenu } from "./navbar-menu"
import { useEffect, useState } from "react"
import { MenuIcon } from "lucide-react"
import { useSearchParams } from "next/navigation"

type TProps = {
  menu: {
    title: string,
    href: string
  }[]
}

export const Navbar = ({ menu }:TProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const params = useSearchParams()

  const handleClose = () => {
    setOpen(false)
  }

  const toogleMenu = () => {
    setOpen(!open)
  }

  useEffect(() => {
    handleClose()
  }, [params])
 
  return (
    <div 
      className={
        "transition-all fixed top-0 h-[var(--navbar-height)] w-full bg-black flex flex-row items-center text-white border-b-1 " +
        (open ? 'border-white' : 'border-black')
      }
    >
      <Container>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center relative z-2">
            <div className="lg:hidden">
              <MenuIcon onClick={toogleMenu} />
            </div>

            <span className="uppercase font-bold text-xl ml-2 lg:m-0">Велдинг тайм</span>
          </div>

          {
            menu && (
              <NavbarMenu menu={menu} open={open} />
            )
          }

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