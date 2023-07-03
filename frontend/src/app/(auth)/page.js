"use client";

import Button from "@/components/Button";
import Image from "next/image";
import React, { useState } from "react";

import { AiOutlineTwitter as TwitterIcon } from "react-icons/ai";

import { FcGoogle as GoogleIcon } from "react-icons/fc";
import SigninModal from "@/components/signin/index";

function page() {
  const [showSignIn, setShowSignin] = useState(false);
  return (
    <main className="w-full flex flex-col-reverse lg:flex-row lg:min-h-screen  ">
      {/* modals */}
      <div>{showSignIn && <SigninModal closeHandler={()=>setShowSignin(false)} />}</div>
      {/* image */}

      <div className="w-full  flex-1 hidden md:flex">
        <Image
          src={"/images/twitterlogin.png"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full block"
        />
      </div>
      {/* sign up or sign in */}

      <div className="w-full md:min-w-[450px] md:max-w-[600px] lg:max-w-[760px]  p-4 flex flex-col justify-center items-center lg:items-start flex-1 mx-auto ">
        {/* twiter icon */}
        <TwitterIcon className="w-11 h-11 text-twitterColor  " />

        {/* text */}

        <div className="w-full flex justify-center lg:justify-start my-10">
          <span className="text-black font-bold text-[40px] md:text-[45px] lg:text-[60px] ">
            Happening now
          </span>
        </div>

        {/* text */}
        <div className="w-full flex justify-center lg:justify-start mb-8">
          <span className="text-black font-bold text-[25px] lg:text-[31px] ">
            Join Twitter today.
          </span>
        </div>

        <div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start   gap-2">
          {/* google sigup button */}

          <div className="w-full  flex justify-center lg:justify-start">
            <Button
              text={"Sign up with Google"}
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

          {/* create account button */}

          <div className="w-full flex justify-center lg:justify-start items-center lg:items-start ">
            <Button
              text={"Create account"}
              customClass={"bg-twitterColor hover:bg-blue-500 "}
              textColor={"#ffffff"}
            />
          </div>

          {/* text */}

          <div className="text-black text-xs w-[300px]">
            By signing up, you agree to the
            <a className="text-twitterColor">
              <span>Terms of Service</span>
            </a>{" "}
            and{" "}
            <a className="text-twitterColor">
              <span>Privacy Policy</span>
            </a>
            , including{" "}
            <a className="text-twitterColor">
              <span>Cookie Use.</span>
            </a>
          </div>
        </div>

        {/* signin button */}

        <div className="w-full flex flex-col gap-4 mt-11 items-center lg:items-start">
          {/* text */}
          <span className="text-black font-bold text-[18px]">
            Already have an account?
          </span>

          {/* signin button */}

          <div className="w-full  flex  justify-center lg:justify-start">
            <div onClick={() => setShowSignin(true)}>
              <Button
                text={"Sign in"}
                customClass={"bg-white hover:bg-blue-100 "}
                textColor={"#1DA1F2"}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
