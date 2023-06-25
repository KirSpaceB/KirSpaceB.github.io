import {useNavigate} from "react-router-dom";

export const LanguageOptions = () => {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/landingPage");
  };
  return (
    <div className="flex flex-row gap-4">
      <button className="border-2" onClick={buttonHandler}>
        <div className="flex w-[100px] text-center justify-center"> English? </div>
      </button>
      <button className="border-2">
        <div className="flex w-[100px] text-center justify-center">
          中国人?
        </div>
      </button>
      <button className="border-2">
        <div className="flex w-[100px] text-center justify-center">
          Tagalog?
        </div>
      </button>
    </div>
  )
}
