import { Link } from "react-router-dom";
import Header from "./Header";

const Register = () => {
  return (
    <div className="relative">
      <Header />
      <div className="bgImage flex justify-center items-center">
        <div className="bg-[#040402] bg-opacity-85">
          <h1 className="text-white text-3xl font-bold mt-10 ml-10">Sign Up</h1>
          <form className="w-[400px] h-[400px] p-10">
            <input
              type="text"
              id="first"
              name="first"
              placeholder="Username"
              className="block w-full mb-6 px-4 py-2 border border-gray-300 bg-[#040402] bg-opacity-85 focus:outline-none focus:border-gray-200 text-white"
              required
            />
            <input
              type="text"
              id="first"
              name="first"
              placeholder="Email or phone number"
              className="block w-full mb-6 px-4 py-2 border border-gray-300 bg-[#040402] bg-opacity-85 focus:outline-none focus:border-gray-200 text-white"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="block mt-10 w-full mb-6 px-4 py-2 border border-gray-300 bg-[#040402] bg-opacity-85 focus:outline-none focus:border-gray-200 text-white"
              required
            />

            <div className="flex justify-center items-center mt-10">
              <button
                type="submit"
                className="bg-[#C11119] w-full text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-red-500"
              >
                Sign Up
              </button>
            </div>
            <h2 className="text-gray-200 mt-10">
              Already have an account? <Link to='/' className="font-semibold">Log In</Link>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;