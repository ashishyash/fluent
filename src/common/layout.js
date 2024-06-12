import { Outlet } from "react-router-dom";
import Footer from "../partials/footer/footer";
import Header from "../partials/header/header";


const Layout = () => {
  return (
    <>
        <Header/>
        <div className="wrapper">
          <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout;