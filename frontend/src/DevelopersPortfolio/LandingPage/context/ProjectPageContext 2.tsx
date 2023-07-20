import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IProjectPageContext {
  isTechStackFinished:boolean,
  setIsTechStackFinished: Dispatch<SetStateAction<boolean>>;
};

interface IChildrenForContext {
  children: ReactNode;
};

export const ProjectPageContext = createContext<IProjectPageContext>({isTechStackFinished: false, setIsTechStackFinished: () => undefined});

export const ProjectPageContextProvider = ({children} : IChildrenForContext) => {
  const [isTechStackFinished, setIsTechStackFinished] = useState(false);


  return (
    <ProjectPageContext.Provider value={{isTechStackFinished, setIsTechStackFinished}}>
      {children}
    </ProjectPageContext.Provider>
  )
}
