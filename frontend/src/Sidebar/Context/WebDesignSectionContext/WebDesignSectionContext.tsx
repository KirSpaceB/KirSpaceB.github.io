import { Dispatch,SetStateAction,ReactNode, createContext, useState } from "react"

interface IWebDesignSection {
  didUserClickWebDesign: boolean,
  setDidUserClickWebDesign:Dispatch<SetStateAction<boolean>>
}

interface IComponentChildNode {
  children:ReactNode
}

export const WebDesignSectionContext = createContext<IWebDesignSection>({
    didUserClickWebDesign:false,
    setDidUserClickWebDesign: () => undefined
})

export const WebDesignSectionContextProvider = ({children} : IComponentChildNode) => {
  const [didUserClickWebDesign, setDidUserClickWebDesign] = useState(false);
  return (
    <WebDesignSectionContext.Provider value={{didUserClickWebDesign, setDidUserClickWebDesign}}>
      {children}
    </WebDesignSectionContext.Provider>
  )
}
