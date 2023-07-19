import { Dispatch,SetStateAction,ReactNode, createContext } from "react"

interface IFrontendSection {
  didUserclickParallaxDesignOnSideBar: boolean,
  setDidUserclickParallaxDesignOnSideBar:Dispatch<SetStateAction<boolean>>
}

interface IComponentChildNode {
  children:ReactNode
}

const FrontendSectionContext = createContext<IFrontendSection>({
    didUserclickParallaxDesignOnSideBar:false,
    setDidUserclickParallaxDesignOnSideBar: () => undefined
})

export const FrontendSectionContextProvider = ({children} : IComponentChildNode) => {
  return (
    <FrontendSectionContext.Provider value={}>
      {children}
    </FrontendSectionContext.Provider>
  )
}
