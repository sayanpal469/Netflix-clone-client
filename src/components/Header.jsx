import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../features/user/userSlice";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action to update Redux store
    dispatch(logOut());
  
    // Clear user data from localStorage
    localStorage.removeItem('user');
  };

  return (
    // <div className="absolute flex flex-col md:flex-row w-full items-center justify-between bg-gradient-to-b from-black px-4 py-2">
    //   <img
    //     className="w-40 md:w-56 mb-2 md:mb-0"
    //     src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
    //     alt="netflix-logo"
    //   />
    //   <div className="flex items-center">
    //     <h1 className="text-white text-lg md:text-xl mr-2 md:mr-4">User</h1>
    //     <div className="flex flex-col md:flex-row">
    //       <button className="bg-red-800 text-white px-4 py-2 mb-2 md:mb-0 mr-2 md:mr-4">Log out</button>
    //       <button className="bg-red-800 text-white px-4 py-2">Search Movie</button>
    //     </div>
    //   </div>
    // </div>

    <div className="absolute w-[100vw]">
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-gradient-to-b from-black px-4 py-2 ">
        <div className="px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-gray-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <h1 className="text-white text-lg md:text-xl mr-2 md:mr-4">
                User
              </h1>
              <button
                onClick={handleLogout}
                className="bg-red-800 text-white px-4 py-2 mb-2 md:mb-0 mr-2 md:mr-4"
              >
                Log out
              </button>
              <a
                href="#"
                className="ml-2 bg-red-800 text-white px-4 py-2 mb-2 md:mb-0 mr-2 md:mr-4"
              >
                Search Movies
              </a>
            </div>
          </div>
        </div>
        {/*
  Mobile menu, show/hide based on mobile menu state.

  Entering: "duration-200 ease-out"
    From: ""
    To: ""
  Leaving: "duration-100 ease-in"
    From: "opacity-100 scale-100"
    To: "opacity-0 scale-95"
*/}

        <div
          className={
            open
              ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gradient-to-b from-black px-4 py-2">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-red-600 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="flex items-center justify-center">
                <h1 className="text-white text-lg md:text-xl mr-2 md:mr-4">
                  User
                </h1>
                <a
                  href="#"
                  className="bg-red-800 text-white px-4 py-2 mb-2 md:mb-0 mr-2 md:mr-4"
                >
                  Log out
                </a>
                <a
                  href="#"
                  className="ml-2 bg-red-800 text-white px-4 py-2 mb-2 md:mb-0 mr-2 md:mr-4"
                >
                  Search Movies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
