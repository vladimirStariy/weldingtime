import { LandingBlockWrapper } from "../landing-block"

type TProps = {
  anchor?: string;
}

export const ContactsBlock = ({ anchor }:TProps) => {
  return (
    <LandingBlockWrapper anchor={anchor}>
      <h2 className="text-black uppercase font-bold text-4xl">Контакты</h2>
      <div className="max-w-[800px] w-full">
        <iframe
          className="w-full h-[300px]" 
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad072ec88eb6cc9dbe96378949918a6a90004d21293c3a6da0127ee1006ac08c5&amp;source=constructor" 
          width="800" 
          height="600" 
        />
      </div>
    </LandingBlockWrapper>
  )
}