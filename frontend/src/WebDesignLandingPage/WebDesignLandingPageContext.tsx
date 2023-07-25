import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

interface IWebDesingLandingPage {
  isIntroductionFinished:boolean,
  setIsIntroductionFinished:Dispatch<SetStateAction<boolean>>
}

export const WebDesingLandingPageContext = createContext<IWebDesingLandingPage>({
  isIntroductionFinished:false,
  setIsIntroductionFinished: () => {}
})
interface IFullStackLandingPageProviderArgs {
  children:ReactNode
}

export const WebDesingLandingPageProvider = ({children} : IFullStackLandingPageProviderArgs) => {
  const [isIntroductionFinished, setIsIntroductionFinished] = useState(false);

  return (
    <WebDesingLandingPageContext.Provider value={{
        isIntroductionFinished, 
        setIsIntroductionFinished
      }}>
      {children}
    </WebDesingLandingPageContext.Provider>
  )
}
