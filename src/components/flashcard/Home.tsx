import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Login from "./Login";

const Home = () => {
  return (
    <div id="home" className="w-full flex h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="w-2/3 mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
        <p className="text-pink-600 font-bold">WELCOME to</p>
        <h2 className="text-3xl md:pt-6 sm:text-5xl font-bold text-blue-800">
          Flashcards
        </h2>
        <h2 className="text-3xl md:pt-8 sm:text-6xl font-bold text-[#8892b0]">
          Learn faster with us
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          In case you already have an account, fill the form on the right or register through the form on the bottom to get started. The flashcards will be presented to you amd you'll be able to interact with them accordingly.
        </p>
        {/* <p className="text-[#8892b0] py-4 max-w-[700px]"></p> */}
        <div>
          <button className="text-blue-600 group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-300 hover:text-white">
            Learn more
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-center md:pr-32">
        <Login />
      </div>
    </div>
  );
};

export default Home;
