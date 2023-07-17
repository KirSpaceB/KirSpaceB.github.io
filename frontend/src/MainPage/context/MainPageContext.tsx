import {ReactNode, useState, createContext,Dispatch, SetStateAction} from "react";

interface IMainPageContext {
  isOnLoadUIFinished:boolean,
  setIsOnLoadUIFinished:Dispatch<SetStateAction<boolean>>
}

interface IChildrenForContext {
  children:ReactNode,
};

export const MainPageContext = createContext<IMainPageContext>({isOnLoadUIFinished:false, setIsOnLoadUIFinished:() => {
  return undefined
}});

export const MainPageContextProvider = ({children} : IChildrenForContext) => {
  const [isOnLoadUIFinished, setIsOnLoadUIFinished] = useState(false);

  return (
    <MainPageContext.Provider 
      value={{isOnLoadUIFinished, setIsOnLoadUIFinished}}
    >
      {children}
    </MainPageContext.Provider>
  )
}