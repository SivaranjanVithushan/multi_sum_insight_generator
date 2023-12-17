import React from "react";

import { Button, Input,TextField} from "@mui/material";


function OnePage() {
  return (
    <>
      <div className="bg-blue_gray-900 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-center justify-start mx-auto p-[103px] md:px-10 sm:px-5 w-full">
        <div className="bg-indigo-900 flex flex-col md:gap-10 gap-[140px] items-center justify-start md:mt-0 my-[11px] p-[57px] md:px-5 rounded-bl-[50px] rounded-tl-[50px] w-[51%] md:w-full">
          <Button
            className="bg-white-A700 block cursor-pointer font-bold h-12 min-w-[192px] rounded-[16px] text-center text-xl tracking-[0.15px]"
            color="white_A700"
            size="xs"
            variant="fill"
          >
            Logo
          </Button>
          <div className="flex flex-col items-center justify-start mb-[187px] w-[74%] md:w-full">
            <TextField className="font-bold sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700 tracking-[0.50px]">
              Welcome back!
            </TextField>
            <TextField className="font-semibold leading-[30.00px] mt-[25px] text-center text-white-A700 text-xl tracking-[0.50px] w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </TextField>
            <Button
              className="cursor-pointer font-black mt-[101px] text-center text-sm w-[456px]"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              SIGN IN
            </Button>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-end md:mt-0 my-[11px] p-[140px] md:px-5 rounded-br-[50px] rounded-tr-[50px] w-1/2 md:w-full">
          <div className="flex flex-col gap-[42px] items-center justify-start w-[87%] md:w-full">
            <TextField className="font-bold sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-900_01 text-center tracking-[0.50px]">
              Create an account
            </TextField>
            <div className="flex flex-col gap-[18px] items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-[456px] sm:w-full">
                <TextField className="font-medium text-blue_gray-900_02 text-sm w-auto">User name</TextField>
                <Input
                  name="username"
                  placeholder="Your user name"
                  className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-200 sm:h-auto text-left text-xs w-full"
                  wrapClassName="border border-gray-600 border-solid w-full"
                  type="text"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start w-[456px] sm:w-full">
                <TextField className="font-medium text-blue_gray-900_02 text-sm w-auto">Email</TextField>
                <Input
                  name="email"
                  placeholder="Your email"
                  className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-200 sm:h-auto text-left text-xs w-full"
                  wrapClassName="border border-gray-600 border-solid flex w-full"
                  type="email"
                  prefix={<img className="h-4 mr-2.5 my-px" src="images/img_lock.svg" alt="lock" />}
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start w-[456px] sm:w-full">
                <TextField className="font-medium text-blue_gray-900_02 text-sm w-auto">Password</TextField>
                <Input
                  name="password"
                  placeholder="Your password"
                  className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-200 sm:h-auto text-left text-xs w-full"
                  wrapClassName="border border-gray-600 border-solid flex w-full"
                  type="password"
                  prefix={<img className="mt-auto mb-0.5 h-4 mr-2.5" src="images/img_icon_lock.svg" alt="Icon/lock" />}
                  suffix={
                    <img className="mt-auto mb-0.5 h-4 ml-[35px]" src="images/img_icon_eyeoff.svg" alt="Icon/eye-off" />
                  }
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start w-[456px] sm:w-full">
                <TextField className="font-medium text-blue_gray-900_02 text-sm w-auto">Confirm password</TextField>
                <Input
                  name="confirmpassword"
                  placeholder="Re- enter your password"
                  className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-200 sm:h-auto text-left text-xs w-full"
                  wrapClassName="border border-gray-600 border-solid flex w-full"
                  type="password"
                  prefix={<img className="mt-auto mb-0.5 h-4 mr-2.5" src="images/img_icon_lock.svg" alt="Icon/lock" />}
                  suffix={
                    <img className="mt-auto mb-0.5 h-4 ml-[35px]" src="images/img_icon_eyeoff.svg" alt="Icon/eye-off" />
                  }
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-black text-center text-sm w-[456px]"
                shape="round"
                color="blue_gray_900_01"
                size="xs"
                variant="fill"
              >
                REGISTER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnePage;