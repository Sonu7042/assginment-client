import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import About from "../component/About";


import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "about",
                element: <About />

            },

        ]
    }
])


export default router