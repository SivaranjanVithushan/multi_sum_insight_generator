import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useDropzone } from 'react-dropzone';

const Landing = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  const onDrop = (acceptedFiles: any) => {
    // Handle the dropped files here
    console.log('Dropped files:', acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: 'image/*', // Specify accepted file types (e.g., images)
  });

  return (
    <div className="flex flex-col justify-center items-stretch px-16 py-5 max-md:px-5">
      <div className="flex flex-col items-stretch ml-14 mr-14 mt-3 mb-1 max-md:max-w-full max-md:mr-2.5">
        {/* <div className="flex justify-between gap-5 mx-7 items-start max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
        <div className="justify-center text-center leading-6 tracking-normal whitespace-nowrap items-stretch  rounded-2xl self-start">
                  <img
                    className='logo'
                    src={logo}
                    alt=""
                    style={{ width: '250px', }}  // Adjust the width and height as needed
                  />
                </div>
        </div> */}
        <div className="bg-blue-950 flex flex-col justify-center items-center px-16 py-12 rounded-[50px] max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="flex w-full max-w-[1444px] flex-col items-stretch mt-12 mb-20 max-md:max-w-full max-md:my-10">
            <div className="text-white text-center text-4xl font-semibold leading-[50px] tracking-wide w-full mx-10 max-md:max-w-full max-md:mr-2.5">
              Take control of your data!<br/>
              Upload your dataset and discover insights for better decision making.
            </div>
            {/* <div className="bg-white flex flex-col justify-center items-center mt-16 px-16 py-12 border-[3px] border-dashed border-slate-800 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="flex w-[788px] max-w-full flex-col items-stretch mt-20 mb-11 max-md:my-10">
                <div className="text-slate-800 text-center text-4xl font-medium leading-[50px] tracking-wide max-md:max-w-full">
                  Drag and drop or browse your file here
                </div>
                <div className="text-white text-center text-sm font-black leading-4 whitespace-nowrap justify-center items-center bg-slate-800 self-center w-[290px] max-w-full mt-10 px-16 py-3.5 rounded-md max-md:mt-10 max-md:px-5">
                  Browse your file
                </div>
              </div>
            </div> */}
             <div className="bg-white flex flex-col justify-center items-center mt-16 px-16 py-12 border-[3px] border-dashed border-slate-800 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-[788px] max-w-full flex-col items-stretch mt-20 mb-11 max-md:my-10">
        <div className="text-slate-800 text-center text-4xl font-medium leading-[50px] tracking-wide max-md:max-w-full">
          Drag and drop or browse your file here
        </div>
        <div {...getRootProps()} className="dropzone text-white text-center text-sm font-black leading-4 whitespace-nowrap justify-center items-center bg-slate-800 self-center w-[290px] max-w-full mt-10 px-16 py-3.5 rounded-md max-md:mt-10 max-md:px-5">
          <input {...getInputProps()} />
          Browse your file
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Landing

