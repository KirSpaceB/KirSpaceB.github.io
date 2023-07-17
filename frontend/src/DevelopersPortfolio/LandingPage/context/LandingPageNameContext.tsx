import React, { ReactNode, useState } from "react";
interface ILandingPageContext {
  isRendered:boolean;
  setIsRendered: React.Dispatch<React.SetStateAction<boolean>>;
};
interface IChildrenForContext {
  children: ReactNode;
};

export const LandingPageNameContext = React.createContext<ILandingPageContext>({isRendered:false, setIsRendered: () => undefined});

export const LandingPageNameContextProvider = ({children} : IChildrenForContext) => {
  const [isRendered, setIsRendered] = useState(false);

  return (
    <LandingPageNameContext.Provider value={{isRendered, setIsRendered}}>
      {children}
    </LandingPageNameContext.Provider>
  )
}