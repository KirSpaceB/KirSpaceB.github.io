import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

interface IFullStackLandingPageContext {
  isIntroductionFinished:boolean,
  setIsIntroductionFinished:Dispatch<SetStateAction<boolean>>
}

export const FullStackLandingPageContext = createContext<IFullStackLandingPageContext>({
  isIntroductionFinished:false,
  setIsIntroductionFinished: () => {}
})
interface IFullStackLandingPageProviderArgs {
  children:ReactNode
}

export const FullStackLandingPageContextProvider = ({children} :IFullStackLandingPageProviderArgs) => {
  const [isIntroductionFinished, setIsIntroductionFinished] = useState(false);

  return (
    <FullStackLandingPageContext.Provider value={{isIntroductionFinished, setIsIntroductionFinished}}>
      {children}
    </FullStackLandingPageContext.Provider>
  )
}
