import { SvgComponent } from '../../shared/SvgComponent'
import SideBarProfile from '../SideBarImages/Sidebarprofile.png'
import { ThreeDots } from '../svg/ThreeDots'
export const Footer = () => {
  return (
    <div className="border-t border-white/20 pt-2 empty:hidden">
      <div className="flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800">
        <img src={SideBarProfile} alt="Not working" className="w-[22px] relative" />
        <div className="text-white text-[12px] relative left-0">John Doe</div>
        <SvgComponent icon={ThreeDots}/>

      </div>
    </div>
  )
}
