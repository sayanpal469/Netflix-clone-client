import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Register from "./Register";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    );
};

export default Body;