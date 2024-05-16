import * as React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase-config';  // Adjust the import path as necessary



interface LoginProps {
  onLogin: () => void;
}

const Login : React.FC<LoginProps> = ({ onLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
      navigate('/home');
    } catch (error) {
      console.error("Error signing in", error);
      alert("Error signing in. Please check your credentials and try again.");
    }
  }

  const handleClick = () => {
    navigate('/register');
  };




  return (
    <div className="justify-center items-stretch flex flex-col px-16 py-12 max-md:px-5">
      <div className="ml-11 mr-11 mt-16 mb-11 max-md:max-w-full max-md:mr-2.5 max-md:my-10">
        <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
            <div className="bg-blue-950 flex grow flex-col w-full pl-16 pr-20 py-12 rounded-[50px_0px_0px_50px] max-md:max-w-full max-md:px-5">
              <div className="justify-center text-center leading-6 tracking-normal whitespace-nowrap items-stretch mt-2 rounded-2xl self-start">
                <img
                  className='logo'
                  src={logo}
                  alt=""
                  style={{ width: '250px', }}  // Adjust the width and height as needed
                />
              </div>
              <div className="text-white text-center text-5xl font-bold leading-[76px] tracking-wide self-center whitespace-nowrap max-md:text-4xl max-md:mt-10">
                New here?
              </div>
              <div className="text-white text-center text-xl font-semibold leading-8 tracking-wide self-center max-w-[553px] mt-12 max-md:max-w-full max-md:mt-10">
                Sign up and discover a great
                amount of new opportunities!
              </div>
              <button
                onClick={handleClick}
                className="text-slate-800 text-center text-sm font-black leading-4 whitespace-nowrap justify-center items-center bg-white self-center w-[456px] max-w-full mt-28 mb-36 px-16 py-3.5 rounded-md max-md:my-10 max-md:px-5"
              >
                REGISTER
              </button>

            </div>
          </div>
          <div className="flex flex-col items-stretch w-[49%]  max-md:w-full max-md:ml-0">
            <div className="bg-white flex grow flex-col justify-center items-center w-full px-16 py-12 rounded-[0px_50px_50px_0px] max-md:max-w-full max-md:px-5">
              <div className="flex w-[456px] max-w-full flex-col max-md:my-10">
                <div className="text-slate-800 text-center text-5xl font-bold leading-[76px] tracking-wide self-center whitespace-nowrap max-md:text-4xl">
                  Sign In
                </div>
                <div className="text-slate-800 text-sm font-medium self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                  Email
                </div>
                <div className="self-stretch rounded border border-[color:var(--Base-Gray-4,#757575)] bg-white flex justify-between gap-2.5 mt-1.5 px-3 py-3.5 border-solid items-start max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b8c0d4b500438a8efe37648854b703cef87421071bda232efb4c424f647ae5d?"
                    alt="Icon"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"

                  />

                  <input
                    type="email"
                    placeholder="Your email"
                    className="text-gray-400 text-xs font-medium w-full border-none focus:outline-none"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />

                </div>

                <div className="text-slate-800 text-sm font-medium self-stretch mt-5 max-md:max-w-full">
                  Password
                </div>

                <div className="items-stretch self-stretch rounded border border-[color:var(--Base-Gray-4,#757575)] bg-white flex gap-2.5 mt-1.5 px-3 py-3.5 border-solid max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d245c732c525c1c80fa8536c8baac646f507c1573dded0550d78d8ab2b19f676?"
                    alt="Icon 1"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full self-start"
                  />
                  <input
                    type="password"
                    placeholder="Your password"
                    className="text-gray-400 text-xs font-medium w-full border-none focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e81cd6ee340f3eb8f35bdc9bd9ead4284a10a9024deb462736892124cfcecc2?"
                    alt="Icon 2"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </div>
                <button
                  onClick={handleLogin}
                  
                  className="text-white text-center text-sm font-black leading-4 whitespace-nowrap justify-center items-center bg-slate-800 self-stretch mt-5 px-16 py-3.5 rounded-md max-md:max-w-full max-md:px-5"
                >
                  SIGN IN
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login




