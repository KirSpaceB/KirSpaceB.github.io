import SideBarProfile from '../SideBarImages/Sidebarprofile.png'
export const Footer = () => {
  return (
    <div className="border-t border-white/20 pt-2 empty:hidden">
      <div className="flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800">
        <img src={SideBarProfile} alt="Not working" className="w-[22px] relative" />
        <div className="text-white text-[12px] relative left-0">John Doe</div>
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0 text-gray-500 relative left-[80px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      </div>
    </div>
  )
}
