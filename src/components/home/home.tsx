import * as React from "react";
import logo from "../../assets/7. ChatBot.png";
import Statistics from "./statistics";

const Home = () => {
  return (
    // <div className="bg-slate-800 flex flex-col items-stretch pt-12 pb-6 px-16 max-md:px-5">
    <div className="flex flex-col items-stretch ml-14 mr-14 mt-3 max-md:max-w-full max-md:mr-2.5">
      <div className="flex items-stretch justify-between gap-5 mt-14 self-start max-md:mt-10">
        <div className="text-slate-800 text-center text-xl font-medium leading-5 tracking-normal items-stretch bg-yellow-400 grow justify-center px-6 py-2.5 max-md:px-5">
          Chatbot
        </div>
        <div className="text-white text-center text-xl font-medium leading-5 tracking-normal grow whitespace-nowrap my-auto">
          Select your language
        </div>
      </div>
      <div className="max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="grow w-full flex-col flex items-center mt-auto px-7 py-12 border-[3px] border-solid border-zinc-200 max-md:max-w-full max-md:px-5">
              <div className="justify-center text-center text-xl font-bold leading-6 tracking-normal items-stretch mt-60 rounded-2xl max-md:mt-10">
                <img
                  className="logo"
                  src={logo}
                  alt=""
                  style={{ width: "200px" }} // Adjust the width and height as needed
                />
              </div>
              <div className="text-white text-center text-4xl font-semibold leading-[50px] tracking-wide mt-11 max-md:max-w-full max-md:mt-10">
                How can I help you today?
              </div>
              <div className="text-gray-400 text-base font-medium border border-[color:var(--Base-Gray-4,#757575)] bg-white self-stretch items-stretch mt-auto px-10 py-7 border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
                Type your question and press enter
              </div>
            </div>
          </div>
          <Statistics />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Home;
