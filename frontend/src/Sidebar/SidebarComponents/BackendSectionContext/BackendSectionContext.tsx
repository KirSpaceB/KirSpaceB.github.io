import { Dispatch,SetStateAction,ReactNode, createContext, useState } from "react"

interface IBackendSection {
  didUserClickBackendSection: boolean,
  setDidUserClickBackendSection:Dispatch<SetStateAction<boolean>>
}

interface IComponentChildNode {
  children:ReactNode
}

export const BackendSectionContext = createContext<IBackendSection>({
    didUserClickBackendSection:false,
    setDidUserClickBackendSection: () => undefined
})

export const BackendSectionContextProvider = ({children} : IComponentChildNode) => {
  const [didUserClickBackendSection, setDidUserClickBackendSection] = useState(false);
  return (
    <BackendSectionContext.Provider value={{didUserClickBackendSection, setDidUserClickBackendSection}}>
      {children}
    </BackendSectionContext.Provider>
  )
}
