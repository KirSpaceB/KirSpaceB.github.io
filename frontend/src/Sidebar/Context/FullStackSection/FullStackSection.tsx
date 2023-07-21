import { Dispatch,SetStateAction,ReactNode, createContext, useState } from "react"

interface IFullStackSection {
  didUserClickFullStackSection: boolean,
  setDidUserClickFullStackSection:Dispatch<SetStateAction<boolean>>
}

interface IComponentChildNode {
  children:ReactNode
}

export const FullStackSectionContext = createContext<IFullStackSection>({
    didUserClickFullStackSection:false,
    setDidUserClickFullStackSection: () => undefined
})

export const FullStackSectionContextProvider = ({children} : IComponentChildNode) => {
  const [didUserClickFullStackSection, setDidUserClickFullStackSection] = useState(false);
  return (
    <FullStackSectionContext.Provider value={{didUserClickFullStackSection, setDidUserClickFullStackSection}}>
      {children}
    </FullStackSectionContext.Provider>
  )
}
