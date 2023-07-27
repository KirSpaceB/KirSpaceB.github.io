import { useState, useEffect } from "react";

interface IUseTextAnimationArgs {
  message: string,
  didPreviousAnimationFinish: boolean,
  triggerNextAnimation?: () => void,
}

interface IUseTextAnimationReturnType {
  animatedText: string;
}

// The main difference from this hook compared to use animation is that it has an if statement to trigger the next animation. The useTextAnimation could also trigger the next animation sequence but it can't pickup if an animation sequence is finished
export function useTriggerNextAnimation({ message, didPreviousAnimationFinish, triggerNextAnimation }: IUseTextAnimationArgs): IUseTextAnimationReturnType {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    if (didPreviousAnimationFinish) {
      const timer = setInterval(() => {
        setAnimatedText((prevText) => {
          if (prevText.length === message.length) {
            clearInterval(timer);
            if(triggerNextAnimation) {
              triggerNextAnimation()
            }
            return prevText;
          }
          return prevText + message.charAt(prevText.length);
        });
      }, 20);

      return () => clearInterval(timer);
    }
  }, [didPreviousAnimationFinish, message]);

  return { animatedText };
}