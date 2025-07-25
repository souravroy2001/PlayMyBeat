import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router";
import svg from "../utils/svg";
import { useState } from "react";
import GOOGLE from "../assets/images/google.png";
import FACEBOOK from "../assets/images/facebook.png";
import APPLE from "../assets/images/apple.png";
// import loginAnimation from "../assets/lottiefiles/XePU8QCSDs.lottie"

export default function Login() {
  const [loginUser, setLoginUser] = useState<{
    email: string;
    password: string;
    rememberMe: boolean;
  }>({
    email: "",
    password: "",
    rememberMe: false,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    const { name, value, type, checked } = event.target as HTMLInputElement;
    setLoginUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="flex justify-center items-center gap-10 h-screen p-4">
      <div className="w-1/2 h-full bg-[#0a0a15] rounded-2xl flex justify-center items-center relative">
        <DotLottieReact
          src={"/src/assets/lottiefiles/XePU8QCSDs.lottie"}
          loop
          autoplay
          style={{ height: "600px", width: "600px" }}
          speed={0.7}
        />
      </div>
      <div className="w-1/2 h-full bg-[#0a0a15] rounded-2xl flex flex-col justify-center items-center p-10">
        <div className="flex flex-col text-white justify-center items-start w-full">
          <h1 className="text-[36px] leading-[36px] font-bold text-white">
            Welcome Back
          </h1>
          <p className="text-[#808080] text-[18px] leading-[24px] mt-2">
            Sign in to continue to Play My Beat
          </p>
        </div>
        <div className="flex flex-col text-white justify-center items-start w-full mt-10">
          <form action="login" method="get" className="flex flex-col w-full">
            <label htmlFor="email" className="select-none">
              Email
            </label>
            <input
              className="bg-[#1E1E1E] p-4 rounded-2xl my-3 outline-0"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              value={loginUser.email}
              onChange={(event) => handleChange(event)}
            />
            <label htmlFor="password" className="select-none">
              Password
            </label>
            <input
              className="bg-[#1E1E1E] p-4 rounded-2xl my-3 outline-0"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              value={loginUser.password}
              onChange={(event) => handleChange(event)}
            />
            <div className="flex flex-row justify-between items-center px-3">
              <div className="flex items-center justify-center gap-2">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    className="sr-only"
                    checked={loginUser.rememberMe}
                    onChange={(event) => handleChange(event)}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer transition-all duration-200 ease-in-out bg-white"
                  >
                    {loginUser.rememberMe && (
                      <div dangerouslySetInnerHTML={{ __html: svg.tick }} />
                    )}
                  </label>
                </div>
                <label
                  htmlFor="rememberMe"
                  className="cursor-pointer select-none text-gray-100"
                >
                  Remember me
                </label>
              </div>
              <Link to={""} className="text-right text-[#f6942b]">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="p-4 rounded-2xl cursor-pointer text-[18px] my-3"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(246, 148, 43, 1) 0%, rgba(224, 64, 94, 1) 50%, rgba(152, 29, 160, 1) 100%)",
              }}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="flex flex-row justify-center items-center text-white mt-3">
          <hr className="border-[#30363D] border w-55 flex-1" />
          <p className="px-4">Or continue with</p>
          <hr className="border-[#30363D] border w-55 flex-1" />
        </div>
        <div className="text-white flex flex-row justify-center items-center gap-10 w-full mt-5">
          <span
            className="border border-[#30363D] w-25 p-4 flex flex-row justify-center items-center cursor-pointer shadow-2xl
           rounded-2xl"
          >
            <img className="w-7 h-7" src={GOOGLE} alt="" />
          </span>
          <span
            className="border border-[#30363D] w-25 p-4 flex flex-row justify-center items-center cursor-pointer shadow-2xl
           rounded-2xl"
          >
            <img className="w-7 h-7" src={APPLE} alt="" />
          </span>
          <span
            className="border border-[#30363D] w-25 p-4 flex flex-row justify-center items-center cursor-pointer shadow-2xl
           rounded-2xl"
          >
            <img className="w-7 h-7" src={FACEBOOK} alt="" />
          </span>
        </div>
        <p className="cursor-pointer select-none mt-5 text-gray-100">
          New to Playmybeat?
          <Link
            to={"/register"}
            className="text-[#f6942b] underline underline-offset-4 ml-2"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
