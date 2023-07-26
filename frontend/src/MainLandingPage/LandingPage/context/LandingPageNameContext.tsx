import React, { ReactNode, useState } from "react";
interface ILandingPageContext {
  isLandingPageNameIntroductionFinished:boolean;
  setIsLandingPageNameIntroductionFinished: React.Dispatch<React.SetStateAction<boolean>>;
};
interface IChildrenForContext {
  children: ReactNode;
};

export const LandingPageNameContext = React.createContext<ILandingPageContext>
(
  {
    isLandingPageNameIntroductionFinished:false,
    setIsLandingPageNameIntroductionFinished: () => undefined
  }
);

export const LandingPageNameContextProvider = ({children} : IChildrenForContext) => {
  const
  [
    isLandingPageNameIntroductionFinished,
    setIsLandingPageNameIntroductionFinished
  ] = useState(false);

  return (
    <LandingPageNameContext.Provider value=
    {
      {
        isLandingPageNameIntroductionFinished,
        setIsLandingPageNameIntroductionFinished
      }
    }>
      {children}
    </LandingPageNameContext.Provider>
  )
}