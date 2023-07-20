import { useState, useEffect } from "react";

interface IUseTextAnimationArgs {
  message:string,
  speed?:number,
  FunctionToTriggerUseContext: () => void
}

interface IUseTextAnimationReturnType {
  animatedText: string;
}


export default function useTextAnimation({
  message,
  speed = 40,
  FunctionToTriggerUseContext
  }: IUseTextAnimationArgs): IUseTextAnimationReturnType {
    
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedText((prevText) => {
        //If characters lengths match stop the interval, this works because the initial value of useState is an empty string. So it compares the empty string to the message argument and appends the missing string.
        if(prevText.length === message.length) {
          clearInterval(timer);
          // We need to do this in Order to prevent violating the React Hooks rule of having side effects
          setTimeout(() => {
            if(FunctionToTriggerUseContext) FunctionToTriggerUseContext();
          }, 0)
          return prevText
        }
        return prevText + message.charAt(prevText.length);
      });
    }, speed)

    // Without this we lose control of the speed variable
    return () => clearInterval(timer);
  },[message, speed, FunctionToTriggerUseContext])
  return {animatedText}
}