import { headerLogo } from "@/assets/images";
import { Link } from "react-router-dom";

const Login = () => {
  
  return (
    <div className="flex w-full     justify-center overflow-hidden h-screen p-4 rounded-xl  shadow-lg">
      <div
        className="hidden bg-cover w-full h-full lg:block lg:w-1/2 rounded-xl "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fHww')",
        }}
      ></div>

      <div className="w-full flex flex-col gap-y-4 px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto w-full ">
          <img className="w-full h-14 sm:h-10" src={headerLogo} alt="" />
        </div>

        <p className="mt-3 text-xl text-center text-red-400 font-bold">
          Welcome back!
        </p>

        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
            htmlFor="LoggingEmailAddress"
          >
            Email Address
          </label>
          <input
            id="LoggingEmailAddress"
            className="block w-full px-4 py-2 text-gray-700 bg-black opacity-40 border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring"
            type="email"
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="loggingPassword"
            >
              Password
            </label>
            <a href="#" className="text-xs text-gray-500 hover:underline">
              Forget Password?
            </a>
          </div>

          <input
            id="loggingPassword"
            className="block w-full px-4 py-2 text-gray-700 bg-black opacity-40 border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring"
            type="password"
          />
        </div>

        <div className="mt-6">
          <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign In
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b md:w-1/4"></span>

          <Link
            to={"/register"}
            className="text-xs text-gray-500 uppercase hover:underline"
          >
            or sign up
          </Link>

          <span className="w-1/5 border-b md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
