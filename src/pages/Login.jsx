import { useNavigate } from "react-router-dom";
import login from "../UI_Images/Login.jpg";
import login_svg from "../UI_Images/login.svg";


function Login() {

  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-row justify-between items-center overflow-hidden">
        <div className="h-full w-1/2">
          <img src={login} alt="Sign Up Image" />
        </div>
        <div className="h-full w-1/2 bg-[#0054C6] flex justify-center items-center rounded-l-lg">
          <form className="h-3/5 w-3/5 flex flex-col justify-evenly">
            <div className="w-full h-20 flex flex-col justify-between items-center">
              <button className="rounded-full h-10 w-10 bg-purple-400 flex items-center justify-center">
                <img className="h-7 w-7 pr-1" src={login_svg} alt="Register" />
              </button>
              <h1 className="text-2xl text-white text-center">LOGIN</h1>
            </div>
            <div>
              <input
                className="border h-14 w-full rounded-xl border-slate-500 px-4 text-lg outline-none placeholder:text-slate-700"
                placeholder="Email"
              ></input>
            </div>
            <div>
              <input
                className="border h-14 w-full rounded-xl border-slate-500 px-4 text-lg outline-none placeholder:text-slate-700"
                placeholder="Password"
              ></input>
            </div>
            <div>
              <button className="h-10 bg-[#57cc99] text-white text-center w-full rounded-md">
                LOGIN
              </button>
            </div>
            <div className="text-right text-white underline text-sm hover:cursor-pointer hover:text-blue-300">
              <p onClick={() => { navigate("/signup") }}>Don't have an account? Sign Up</p>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Login;
