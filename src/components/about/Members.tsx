import React from 'react';
// import { SlArrowLeft } from "react-icons/sl";
// import { SlArrowRight } from "react-icons/sl";
import p2 from "../../assets/p2.png";
const Members = () => {
  return (
    <>
      <div className="main-container ">
         <div className='slide-container'>
            {/* <button>
              <SlArrowLeft className='arrow'/>
            </button> */}
            <div className='slider'>
              <div className="one-slider">
                <div className='yellow-container'>
                  <div className="image-container">
                    <img className='image' src={p2} alt=""/>
                  </div>
                </div>
                <div className='white-container'>
                  <p>
                    <b>ARAFATH</b> <br />
                    ICT19805 <br />
                    ict19805@sjp.ac.lk <br />
                    0754123799 <br />
                    Software Technology <br /> 
                  </p>
                </div>
              </div>
              <div className="one-slider">
                <div className='yellow-container'>
                  <div className="image-container">
                    <img className='image' src={p2} alt=""/>
                  </div>
                </div>
                <div className='white-container'>
                <p>
                    <b>FAREEHA</b> <br />
                    ICT19823 <br />
                    ict19823@sjp.ac.lk <br />
                    0766951999 <br />
                    Software Technology <br /> 
                  </p>
                 
                </div>
              </div>
              <div className="one-slider">
                <div className='yellow-container'>
                  <div className="image-container">
                    <img className='image' src={p2} alt=""/>
                  </div>
                </div>
                <div className='white-container'>
                  <p>
                    <b>VITHUSHAN</b> <br />
                    ICT19868 <br />
                    ict19868@sjp.ac.lk <br />
                    0762644218 <br />
                    Software Technology <br /> 
                  </p>
                </div>
              </div>
            </div>
            {/* <button>
              <SlArrowRight className='arrow'/>
            </button> */}
        </div>      
      </div>
    </>
  )
}

export default Members

// import React from 'react';
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
// import p2 from '../../assets/p2.png';

// const Members = () => {
//   return (
//     <div className="main-container">
//       <div className="flex items-center justify-center slide-container">
//         <button className="mr-4 focus:outline-none">
//           <BsArrowLeft className="arrow text-4xl" />
//         </button>
//         <div className="slider overflow-hidden">
//           <div className="one-slider flex">
//             <div className="yellow-container p-4">
//               <div className="image-container">
//                 <img className="image rounded" src={p2} alt="" />
//               </div>
//             </div>
//             <div className="white-container p-4">
//               <p className="font-bold">
//                 ARAFATH <br />
//                 ICT19805 <br />
//                 ict19805@sjp.ac.lk <br />
//                 0754123799 <br />
//                 Software Technology <br />
//               </p>
//             </div>
//           </div>
//           {/* Repeat similar structure for other slides */}
//           <div className="one-slider flex">
//             <div className="yellow-container p-4">
//               <div className="image-container">
//                 <img className="image rounded" src={p2} alt="" />
//               </div>
//             </div>
//             <div className="white-container p-4">
//               <p className="font-bold">
//                 ARAFATH <br />
//                 ICT19805 <br />
//                 ict19805@sjp.ac.lk <br />
//                 0754123799 <br />
//                 Software Technology <br />
//               </p>
//             </div>
//           </div>
//         </div>
//         <button className="ml-4 focus:outline-none">
//           <BsArrowRight className="arrow text-4xl" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Members;

