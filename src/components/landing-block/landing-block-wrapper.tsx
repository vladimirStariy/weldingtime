import { ReactNode } from "react"

type TProps = {
  children: ReactNode | ReactNode[]
  anchor?: string
  className?: string
}

export const LandingBlockWrapper = ( { children, className, anchor }:TProps ) => {
  return (
    <div 
      id={anchor}
      className={
        "w-full h-[var(--landing-height)] scroll-mt-[var(--navbar-height)] " + className
      }
    >
      {children}
    </div>
  )
}