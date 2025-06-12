import React, { useEffect} from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Navbar = () => {


  return (
    <div className="fixed backdrop-blur-sm rounded-4xl top-1 left-0 w-full z-50 flex justify-center">
      <nav className="flex backdrop-blur px-4 py-3 bg-black bg-opacity-70 rounded-4xl max-w-7xl justify-center text-white sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[25%]">
        <ul className="flex gap-5 items-center justify-between w-full">
          <li>
            <a href="#home" aria-label="Home">
              <DotLottieReact
                src="/animations/home.lottie"
                autoplay={true}
                loop
                style={{ width: "25px", height: "25px" }}
              />
            </a>
          </li>
          <li className="flex items-center gap-5">
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#works" className="hover:text-blue-400">Works</a>
            <a href="#story" className="hover:text-blue-400">Story</a>
            <a href="#chat" className="hover:text-blue-400">Chat</a>
          </li>
          <li>
            <a
              href="mailto:sj586997@gmail.com"
              className="p-2 bg-blue-500 text-white rounded-3xl flex flex-nowrap hover:bg-blue-600 transition-colors"
            >
              Start Project
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
