import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import Header from "./Header"


const Layout = () => {
  return (
  <div className="flex flex-row bg-white h-screen w-screen overflow-hidden">
    <SideBar/>
    <div className="flex-1">
    <Header/>
    <div ><Outlet/></div>

    </div>
  </div>
  )
}

export default Layout