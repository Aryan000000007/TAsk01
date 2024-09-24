import { Outlet } from "react-router-dom";
import Navbar from '../component/Navbar'


const MainLayouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default MainLayouts
