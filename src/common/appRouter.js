import { createBrowserRouter } from "react-router-dom";
import { lazy , Suspense} from "react";
// import Layout from "./layout";


const About = lazy(() => import('../components/about/about'));
const Contact = lazy(() => import('../components/contact/contact'));
const Catalog = lazy(() => import('../components/catalog/catalog'));
const Home = lazy(()=> import('../components/home/home'));
const Layout = lazy(() => import('../common/layout'));
const ApiDetail = lazy(() => import('../components/api-detail/api-detail'));

const AppRouter = createBrowserRouter([
    {
        path: '/', element: <Suspense fallback={'loading'}><Layout /></Suspense>,
        children: [
            {
                path: '/', element: <Suspense fallback={'loading'}><Home/></Suspense>
            },
            {
                path: '/about', element: <Suspense fallback={'loading'}><About /> </Suspense> 
            },
            {
                path: '/contact', element: <Suspense fallback={'loading'}><Contact/></Suspense>
            },
            {
                path: '/catalog', element: <Suspense fallback={'loading'}><Catalog/></Suspense>
            },
            {
                path: '/apidetail/:type/:id' , element: <Suspense fallback={'loading'}><ApiDetail/></Suspense>
            }
        ]
    }
])

export default AppRouter;