import { GPT3Logo } from "../svg/GPT3Logo"
import { GPT4Logo } from "../svg/GPT4Logo"

export const OnLoadUIPill = () => {
  return (
    <div className="
    outer-pill-wrapper
    relative top-6 flex justify-center items-center
    rounded-xl p-1 bg-gray-100 text-gray-900
    dark:bg-gray-900 opacity-95
    ">
      <ul className="flex flex-row gap-1 bg-gray-900 w-[307px] h-[47px] rounded-xl">
        <li className="flex-grow">
          <div className="flex justify-center items-center gap-3 rounded-lg border py-3 text-gray-900 bg-white outline-none border-black/10 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100">
            <span>
              <GPT3Logo/>
            </span>
            <span className="truncate text-sm font-medium pr-1.5 sm:pr-1.5">
              GPT-3.5
            </span>
          </div>
        </li>
        <li className="flex-grow">
          <div className="flex justify-center items-center gap-3 rounded-lg py-3">
            <span>
              <GPT4Logo/>
            </span>
            <span className="truncate text-sm font-medium pr-1.5 sm:pr-1.5 text-gray-500">
              GPT-4.0
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}
