import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface ITechStackContext {
  isAgeLocationFinished:boolean,
  setIsAgeLocationFinished: Dispatch<SetStateAction<boolean>>;
}
interface IChildrenForContext {
  children: ReactNode;
};

export const TechStackContext = createContext<ITechStackContext>({isAgeLocationFinished:false, setIsAgeLocationFinished: () => undefined})
export const TechStackContextProvider = ({children} : IChildrenForContext) => {
  const [isAgeLocationFinished, setIsAgeLocationFinished] = useState(false);
  return (
    <TechStackContext.Provider value={{isAgeLocationFinished, setIsAgeLocationFinished}}>
      {children}
    </TechStackContext.Provider>
  )
}
