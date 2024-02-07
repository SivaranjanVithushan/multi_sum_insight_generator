import React from 'react';
import arafath from '../../assets/image/arafath.jpeg';
import vithu from '../../assets/image/vithushan.jpeg';
import fareeha from '../../assets/image/Fareeha.jpeg';
const Members = () => {
  return (
    <div className="bg-blue-950 flex flex-col justify-center items-stretch mt-14 px-16 py-12 rounded-[50px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <header className="mx-4 my-9 max-md:max-w-full max-md:mr-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <form
              className="bg-white flex grow flex-col items-stretch w-full pb-5 rounded-[40px] max-md:max-w-full max-md:mt-10"
              aria-label="Profile 1"
            >
              <div className="bg-amber-400 flex flex-col justify-center items-center px-16 py-10 rounded-[40px] max-md:max-w-full max-md:px-5">
                <img
                  loading="lazy"
                  src={arafath}
                  className="object-cover aspect-[1.01] object-contain object-center w-[198px] stroke-[3px] overflow-hidden max-w-full border rounded-full border-solid"
                  alt="Profile 1"
                />
              </div>
              <div className="text-black text-center text-2xl font-bold leading-9 tracking-wide self-center mt-7">
                ARAFATH <br /> ICT19805 <br /> ict19805@gmail.com <br /> 0754123799 <br /> Software Techology
              </div>
            </form>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <form
              className="bg-white flex grow flex-col items-stretch w-full pb-5 rounded-[40px] max-md:max-w-full max-md:mt-10"
              aria-label="Profile 2"
            >
              <div className="bg-amber-400 flex flex-col justify-center items-center px-16 py-10 rounded-[40px] max-md:max-w-full max-md:px-5">
                <img
                  loading="lazy"
                  src={fareeha}
                  className="object-cover aspect-[1.01] object-contain object-center w-[198px] stroke-[3px] overflow-hidden max-w-full border rounded-full border-solid"
                  alt="Profile 2"
                />
              </div>
              <div className="text-black text-center text-2xl font-bold leading-9 tracking-wide self-center mt-7">
                ARAFATH <br /> ICT19805 <br /> ict19805@gmail.com <br /> 0754123799 <br /> Software Techology
              </div>
            </form>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <form
              className="bg-white flex grow flex-col items-stretch w-full pb-5 rounded-[40px] max-md:max-w-full max-md:mt-10"
              aria-label="Profile 2"
            >
              <div className="bg-amber-400 flex flex-col justify-center items-center px-16 py-10 rounded-[40px] max-md:max-w-full max-md:px-5">
                <img
                  loading="lazy"
                  src={vithu}
                  className="object-cover aspect-[1.01] object-contain object-center w-[198px] stroke-[3px] overflow-hidden max-w-full border rounded-full border-solid"
                  alt="Profile 2"
                />
              </div>
              <div className="text-black text-center text-2xl font-bold leading-9 tracking-wide self-center mt-7">
                ARAFATH <br /> ICT19805 <br /> ict19805@gmail.com <br /> 0754123799 <br /> Software Techology
              </div>
            </form>
          </div>
        
        </div>
      </header>
    </div>
  )
}

export default Members
