import { ReactNode } from "react"

type TProps = {
  children: ReactNode | ReactNode[]
  className?: string
}

export const Container = ({ children, className }:TProps) => {
  return (
    <div className={"w-full flex flex-col items-center " + className}>
      <div className="max-w-7xl w-full px-6 xl:px-0">
        {children}
      </div>
    </div>
  )
}