import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../components/home/home";
import About from "../components/about/about";
import Contact from "../components/contact/contact";

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
            }
        ]
    }
])

export default AppRouter;