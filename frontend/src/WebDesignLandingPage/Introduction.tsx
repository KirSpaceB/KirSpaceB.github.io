import useTextAnimation from '../shared/Hooks/useTextAnimation';
import { RobotLogo } from '../DevelopersPortfolio/techstackicons';
export const Introduction = () => {
  let message = "Demonstrating an acute understanding of modern user behavior, the individual has adeptly implemented responsive web design principles across their projects. By ensuring that their creations adapt seamlessly to diverse screen sizes and devices, they have effectively catered to the preferences of a wide-ranging audience, leading to enhanced user engagement and satisfaction.";
  const {animatedText} = useTextAnimation({
    message,
  })
  return (
    <div className='border-black/10 dark:border-gray-900/50 dark:bg-[#444654] w-screen'>
      <div className="flex flex-row p-4 gap-4 text-base items-start justify-center">
        <div className="w-[30px] flex flex-col items-end">
          <div className="p-1 rounded-sm w-[30px] bg-red-500 flex-shrink-0">
            <img src={RobotLogo} alt="Check Answer.tsx img tag with robotlogo"/>
          </div>
        </div>
        <div className="text-white w-[48rem]">
          {animatedText}
        </div>
      </div>
    </div>
  )
}
