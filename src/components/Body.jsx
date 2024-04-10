import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import PrivateRoutes from "../Private/PrivateRoutes.jsx";
import Browse from "./Browse";
import Register from "./Register";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchLoggedInUserAsync } from "../features/user/userSlice.js";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/browse",
      element: (
        <PrivateRoutes>
          <Browse />
        </PrivateRoutes>
      ),
    },
  ]);

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      if (user) {
        dispatch(fetchLoggedInUserAsync(user._id));
      }
    } else {
      console.log("No user data found in local storage.");
    }
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
