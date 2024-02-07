import * as React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'

interface RegisterProps {
    onRegister: () => void;
  }
  

const Register: React.FC<RegisterProps> = ({ onRegister }) => {

    const handleLogin = () => {
        // Perform your login logic
        // ...
    
        // Call the onLogin prop to notify the parent component about the login
        onRegister();
      };
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
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
                                    Welcome back!
                                </div>
                                <div className="text-white text-center text-xl font-semibold leading-8 tracking-wide self-center max-w-[553px] mt-12 max-md:max-w-full max-md:mt-10">
                                    To Keep  Connected with us, please
                                    login with your personal info
                                </div>
                                <button
                                    onClick={handleClick}
                                    className="text-slate-800 text-center text-sm font-black leading-4 whitespace-nowrap justify-center items-center bg-white self-center w-[456px] max-w-full mt-28 mb-36 px-16 py-3.5 rounded-md max-md:my-10 max-md:px-5"
                                >
                                    SIGN IN
                                </button>

                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
                            <div className="bg-white flex grow flex-col justify-center items-center w-full px-16 py-12 rounded-[0px_50px_50px_0px] max-md:max-w-full max-md:px-5">
                                <div className="flex w-[483px] max-w-full flex-col items-stretch max-md:my-10">
                                    <div className="text-slate-800 text-center text-5xl font-bold leading-[76px] tracking-wide max-md:max-w-full max-md:text-4xl">
                                        Create an account
                                    </div>
                                    <div className="text-slate-800 text-sm font-medium mt-16 max-md:max-w-full max-md:mt-10">
                                        User name
                                    </div>
                                    <input className="text-gray-400 text-xs font-medium items-stretch rounded border focus:outline-none border-[color:var(--Base-Gray-4,#757575)] bg-white justify-center mt-1.5 px-3 py-3.5 border-solid max-md:max-w-full" type="email" placeholder='Your name' />

                                    <div className="text-slate-800 text-sm font-medium mt-5 max-md:max-w-full">
                                        Email
                                    </div>
                                    <div className="flex items-stretch rounded border border-[color:var(--Base-Gray-4,#757575)] focus:outline bg-white gap-2.5 mt-1.5 pl-3.5 pr-5 py-3.5 max-md:max-w-full max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6634dbd1bab6fda584ac39ac02b561d06427f9ed95f7e7452fc7f0024e02467e?"
                                            alt="Icon 1"
                                            className="w-4 h-4 self-start"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="text-gray-400 text-xs font-medium self-start w-full border-none focus:outline-none"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2041230e855b72cb4256b8d9516fd3ef303b4b735fc046bd4cb472ab6ddf9e17?"
                                            alt="Icon 2"
                                            className="w-4 h-4 self-start"
                                        />
                                    </div>

                                    <div className="text-slate-800 text-sm font-medium mt-5 max-md:max-w-full">
                                        Password
                                    </div>
                                    <div className="flex items-stretch rounded border border-[color:var(--Base-Gray-4,#757575)] bg-white gap-2.5 mt-1.5 pl-3.5 pr-5 py-3.5 max-md:max-w-full max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad36129f731cccccbdff4827bac7c729a9c18e7c25a9278b9a45f4162ed5d859?"
                                            alt="Icon 1"
                                            className="w-4 h-4 self-start"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Your password"
                                            className="text-gray-400 text-xs font-medium self-start w-full border-none focus:outline-none"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2041230e855b72cb4256b8d9516fd3ef303b4b735fc046bd4cb472ab6ddf9e17?"
                                            alt="Icon 2"
                                            className="w-4 h-4 self-start"
                                        />
                                    </div>

                                    <div className="text-slate-800 text-sm font-medium mt-5 max-md:max-w-full">
                                        Confirm password
                                    </div>
                                    <div className="flex items-stretch rounded border border-[color:var(--Base-Gray-4,#757575)] bg-white gap-2.5 mt-1.5 pl-3.5 pr-5 py-3.5 max-md:max-w-full max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7aa66f28f42ceda063378a5d8ac611fde5639670f9a8f22b82db1dcb24c44da?"
                                            alt="Icon 1"
                                            className="w-4 h-4 self-start"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Re-enter your password"
                                            className="text-gray-400 text-xs font-medium self-start w-full border-none focus:outline-none"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/72b153ba6fd581a6d8dcaf52f0e343ebc52ffa6de041250e6501f7ad6bc2bc54?"
                                            alt="Icon 2"
                                            className="w-4 h-4 self-start"
                                        />
                                    </div>

                                    <button
                                        className="text-white text-center text-sm font-black leading-4 whitespace-nowrap justify-center items-center bg-slate-800 mt-5 px-16 py-3.5 rounded-md max-md:max-w-full max-md:px-5" onClick={handleLogin}
                                    >
                                        REGISTER
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Register


