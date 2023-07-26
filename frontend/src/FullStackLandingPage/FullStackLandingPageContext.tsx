import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

interface IFullStackLandingPageContext {
  isFsLpIntroductionFinished:boolean,
  setIsFsLpIntroductionFinished:Dispatch<SetStateAction<boolean>>
}

export const FullStackLandingPageContext = createContext<IFullStackLandingPageContext>({
  isFsLpIntroductionFinished:false,
  setIsFsLpIntroductionFinished: () => {}
})
interface IFullStackLandingPageProviderArgs {
  children:ReactNode
}

export const FullStackLandingPageContextProvider = ({children} : IFullStackLandingPageProviderArgs) => {
  const [isFsLpIntroductionFinished, setIsFsLpIntroductionFinished] = useState(false);

  return (
    <FullStackLandingPageContext.Provider value={{
        isFsLpIntroductionFinished, 
        setIsFsLpIntroductionFinished
      }}>
      {children}
    </FullStackLandingPageContext.Provider>
  )
}
