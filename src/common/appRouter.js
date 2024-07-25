import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../components/home/home";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Catalog from "../components/catalog/catalog";
import ApiDetail from "../components/api-detail/api-detail";
const AppRouter = createBrowserRouter([
    {
        path: '/', element: <Layout />,
        children: [
            {
                path: '/', element: <Home/>
            },
            {
                path: '/about', element: <About />
            },
            {
                path: '/contact', element: <Contact/>
            },
            {
                path: '/catalog', element: <Catalog/>
            },
            {
                path: 'apidetail/:type/:id' , element: <ApiDetail/>
            }
        ]
    }
])

export default AppRouter;