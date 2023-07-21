import { Dispatch,SetStateAction,ReactNode, createContext, useState } from "react"

interface IFrontendSection {
  didUserClickFrontend: boolean,
  setDidUserClickFrontend:Dispatch<SetStateAction<boolean>>
}

interface IComponentChildNode {
  children:ReactNode
}

export const FrontendSectionContext = createContext<IFrontendSection>({
    didUserClickFrontend:false,
    setDidUserClickFrontend: () => undefined
})

export const FrontendSectionContextProvider = ({children} : IComponentChildNode) => {
  const [didUserClickFrontend, setDidUserClickFrontend] = useState(false);
  return (
    <FrontendSectionContext.Provider value={{didUserClickFrontend, setDidUserClickFrontend}}>
      {children}
    </FrontendSectionContext.Provider>
  )
}
