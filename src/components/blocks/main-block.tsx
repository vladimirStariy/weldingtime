import { LandingBlockWrapper } from "../landing-block"

type TProps = {
  anchor?: string;
}

export const MainBlock = ({ anchor }:TProps) => {
  return (
    <LandingBlockWrapper className="flex flex-col items-center justify-center" anchor={anchor}>
      <span className="text-5xl font-bold text-black uppercase">{anchor}</span>
    </LandingBlockWrapper>
  )
}