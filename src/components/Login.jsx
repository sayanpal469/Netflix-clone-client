import { Link, Navigate } from "react-router-dom";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginUserAsync } from "../features/user/userSlice";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, isUser, response, error } = useSelector(
    (state) => state.user
  );
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // console.log(response);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const resetFunction = () => {
    setUserData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAsync(userData));
    resetFunction();
    setHasSubmitted(true);
  };

  // useEffect to reset hasSubmitted after response or error changes
  useEffect(() => {
    if (response || error) {
      setHasSubmitted(false);
    }
  }, [response, error]);

  // Show toast only if hasSubmitted is true and there is an error
  useEffect(() => {
    if (hasSubmitted && response) {
      toast.success(response.message);
    }
    if (hasSubmitted && error) {
      toast.error(error);
    }
  }, [hasSubmitted, error, response]);

  return (
    <div className="relative">
      <Header />
      {isUser ? (
        <Navigate to="/browse" replace={true} />
      ) : (
        <div className="bgImage flex justify-center items-center">
          <div className="bg-[#040402] bg-opacity-85">
            <h1 className="text-white text-3xl font-bold mt-10 ml-10">
              Sign In
            </h1>
            <form onSubmit={handleSubmit} className="w-[400px] h-[400px] p-10">
              <input
                type="text"
                id="first"
                name="first"
                placeholder="Email"
                className="block w-full mb-6 px-4 py-2 border border-gray-300 bg-[#040402] bg-opacity-85 focus:outline-none focus:border-gray-200 text-white"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                required
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="block mt-10 w-full mb-6 px-4 py-2 border border-gray-300 bg-[#040402] bg-opacity-85 focus:outline-none focus:border-gray-200 text-white"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                required
              />

              <span className="text-white text-end block">
                Forgot Password?
              </span>

              <div className="flex justify-center items-center mt-10">
                {isLoading ? (
                  <button
                    type="button"
                    className="bg-[#C11119] w-full text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-red-500"
                    disabled // Remove the disabled attribute
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG paths */}
                    </svg>
                    Loading...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-[#C11119] w-full text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-red-500"
                  >
                    Sign In
                  </button>
                )}
              </div>
              <h2 className="text-gray-200 mt-10">
                New to Netflx?{" "}
                <Link to="/register" className="font-semibold">
                  Sign up now
                </Link>
              </h2>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
