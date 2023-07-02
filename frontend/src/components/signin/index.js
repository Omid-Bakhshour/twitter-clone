import React from "react";
import ModalContainer from "../ModalContainer";

import { AiOutlineTwitter as TwitterIcon } from "react-icons/ai";
import { FcGoogle as GoogleIcon } from "react-icons/fc";

import { IoClose as CloseIcon } from "react-icons/io5";
import Button from "../Button";

function Index() {
  return (
    <ModalContainer
      minWidthSize="600px"
      maxWidthSize="80vw"
      maxheightSize="80vh"
    >
      <div className="w-full  flex justify-center relative ">
        <div className="absolute top-4 left-5 cursor-pointer">
          <CloseIcon className="w-6 h-6 block text-black" />
        </div>

        <div className="min-w-[365px] max-w-[365px] flex flex-col flex-1    ">
          {/* twiter icon */}

          <div className="w-full flex flex-col  items-center mt-3">
            <TwitterIcon className="w-11 h-11 text-twitterColor  " />
          </div>

          {/* contents */}

          <div className="w-full flex flex-col flex-1 flex-shrink-0  justify-center px-8 py-12">
            {/* text */}

            <div className=" md:text-[28px] mb-5 lg:text-[30px] font-bold text-black">
              <h1>Sign in to Twitter</h1>
            </div>

            {/* google button */}

            <div className="w-full  flex justify-center my-3 lg:justify-start">
              <Button
                text={"Sign In with Google"}
                customClass={"bg-white hover:bg-gray-200 "}
                textColor={"#000000"}
                image={<GoogleIcon className="w-5 h-5 block" />}
              />
            </div>
            {/* or */}

            <div className="flex items-center gap-1 w-[300px]">
              <div className="h-[1px] bg-gray-100 w-full block" />
              <span className="text-md">or</span>

              <div className="h-[1px] bg-gray-100 w-full block" />
            </div>

            {/* user or email input */}

            {/* password input */}

            {/* login button */}

            <div className="w-full flex justify-center  lg:justify-start items-center lg:items-start my-3 ">
              <Button
                text={"Sign in"}
                customClass={"bg-black hover:bg-gray-900 "}
                textColor={"#ffffff"}
              />
            </div>

            {/* forget password button */}

            <div className="w-full flex justify-center  lg:justify-start items-center lg:items-start my-3 ">
              <Button
                text={"Forget password?"}
                customClass={"bg-white hover:bg-gray-200 "}
                textColor={"#000000"}
              />
            </div>

            {/* signup text */}

            <div className="w-full mt-10 flex flex-row items-center gap-1 text-md">
              <span className="text-gray-600">Don't have an account?</span>
              <a className="text-twitterColor">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

export default Index;
