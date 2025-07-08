import { ReactNode } from "react"
import { Navbar } from "./navbar"
import { mainMenuData } from "../datas"

type TProps = {
  children: ReactNode | ReactNode[]
}

export const Layout = ({ children }: TProps) => {
  return (
    <>
      <Navbar menu={mainMenuData} />
      <div className="h-[var(--navbar-height)]" />
      <main>{children}</main>
    </>
  )
}