import { Dispatch,SetStateAction,ReactNode, createContext, useState } from "react"

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
  const [didUserclickParallaxDesignOnSideBar, setDidUserclickParallaxDesignOnSideBar] = useState(false);
  return (
    <FrontendSectionContext.Provider value={{didUserclickParallaxDesignOnSideBar, setDidUserclickParallaxDesignOnSideBar}}>
      {children}
    </FrontendSectionContext.Provider>
  )
}
