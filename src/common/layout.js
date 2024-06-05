import { Outlet } from "react-router-dom";
import Footer from "../partials/footer/footer";
import Header from "../partials/header/header";


const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout;