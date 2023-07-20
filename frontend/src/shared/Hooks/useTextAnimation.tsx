import { useState, useEffect } from "react";

interface IUseTextAnimationArgs {
  message:string,
  speed?:number,
<<<<<<< HEAD
  callbackFnForDestructContext?: () => void
=======
  FunctionToTriggerUseContext: () => void
>>>>>>> 5547432 (Create custom hook for animation (#17))
}

interface IUseTextAnimationReturnType {
  animatedText: string;
}

<<<<<<< HEAD
// Pass in a variable containing a string and it will animate it on the ui at a fixed speed of 40 milliseconds(can be change). The callbackFn is used to trigger a Set State fn from a Context to trigger the rendering of another UI.
export default function useTextAnimation({
  message,
  speed = 40,
  callbackFnForDestructContext
=======

export default function useTextAnimation({
  message,
  speed = 40,
  FunctionToTriggerUseContext
>>>>>>> 5547432 (Create custom hook for animation (#17))
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
<<<<<<< HEAD
            if(callbackFnForDestructContext) callbackFnForDestructContext();
=======
            if(FunctionToTriggerUseContext) FunctionToTriggerUseContext();
>>>>>>> 5547432 (Create custom hook for animation (#17))
          }, 0)
          return prevText
        }
        return prevText + message.charAt(prevText.length);
      });
    }, speed)

    // Without this we lose control of the speed variable
    return () => clearInterval(timer);
<<<<<<< HEAD
  },[])
=======
  },[message, speed, FunctionToTriggerUseContext])
>>>>>>> 5547432 (Create custom hook for animation (#17))
  return {animatedText}
}