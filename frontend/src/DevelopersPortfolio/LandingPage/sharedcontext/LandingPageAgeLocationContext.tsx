import { ReactNode,useState,createContext, Dispatch, SetStateAction } from "react";

interface ILandingPageAgeLocationContext {
  isGreetingFinished: boolean,
  setIsGreetingFinished: Dispatch<SetStateAction<boolean>>;
};

interface IChildrenForContext {
  children: ReactNode;
};

export const LandingPageAgeLocationContext = createContext<ILandingPageAgeLocationContext>({isGreetingFinished:false, setIsGreetingFinished: () => undefined});

export const LandingPageAgeLocationContextProvider = ({children} : IChildrenForContext) => {
  const [isGreetingFinished, setIsGreetingFinished] = useState(false);

  return (
    <LandingPageAgeLocationContext.Provider value={{isGreetingFinished, setIsGreetingFinished}}>
      {children}
    </LandingPageAgeLocationContext.Provider>
  )
}
