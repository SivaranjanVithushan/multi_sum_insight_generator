import logo from '../assets/logo.png'
import image from '../assets/imgd.png'
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };
  return (
    <div className="flex flex-col justify-center items-center px-16  max-md:px-5">
        <div className="flex w-full max-w-[1636px] flex-col items-center mt-3 mb-8 max-md:max-w-full">
          <div className="self-stretch flex justify-between gap-5 items-start items-center max-md:max-w-full max-md:flex-wrap">
            <div className="justify-center text-center leading-6 tracking-normal whitespace-nowrap items-stretch mt-2 rounded-2xl self-start">
              <img
                className='logo'
                src={logo}
                alt=""
                style={{ width: '200px', }}  // Adjust the width and height as needed
              />
            </div>
            <div className="text-slate-800 text-center text-xl font-medium leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-yellow-400 mt-3 px-6 py-2.5 max-md:px-5">
              About US
            </div>
          </div>
          <div className="text-white text-center text-4xl font-semibold leading-[50px] tracking-wide w-[1466px] -ml-px mt-16 max-md:max-w-full max-md:mt-10">
            ELEVATE YOUR RETAIL INTELLIGENCE.   UPLOAD DATA EFFORTLESSLY RECEIVE INSIGHTS INSTANTLY
          </div>
          <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex grow flex-col justify-center items-stretch  px-px py-3 max-md:max-w-full max-md:mt-10">
                <img
                className='logo'
                src={image}
                alt=""
                style={{ width: '600px', }}  // Adjust the width and height as needed
              />
              </div>
              <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
                  <div className="text-white text-3xl font-medium leading-[50px] tracking-wide max-md:max-w-full">
                    Empower   your   grocery  retail    decisions  with
                    our   advanced   data   summarization   platform.
                    Seamlessly upload, analyze, predict and visualize
                    data   for   unparalleled   insights.
                  </div>{" "}
                  <button
                    onClick={handleClick}
                    className="text-slate-800 text-center text-xl font-medium leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-yellow-400 mt-12 px-6 py-2.5 self-start max-md:mt-10 max-md:px-5  hover:bg-yellow-500 focus:outline-none rounded-md"
                  >
                    Get Started
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default GetStarted;


