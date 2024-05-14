import React, { useState } from "react";
import Resume from "../Images/Ashfakur Resume.pdf";
import images from "../Images/Ashfakur-modified.png";
import { TypeAnimation } from "react-type-animation";

function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleNav = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="w-[100%] h-auto md:h-[90vh] add_image  bg-cover ">
        <div className="w-[100%] h-auto md:h-[100vh]  bg-[rgba(0,0,0,0.7)] ">
          <nav className="flex flex-row justify-between px-14 bg-transparent text-white p-5 ">
            <a href="#home" className="text-2xl cursor-pointer">
              <h2 className="font-bold">AR.</h2>
            </a>

            <div className="hidden md:flex flex-row gap-5 text-lg">
              <a
                href="#home"
                className="transform hover:scale-125  transition duration-100"
              >
                Home
              </a>
              <a
                href="#about"
                className="transform hover:scale-125  transition duration-100"
              >
                About
              </a>
              <a
                href="#skills"
                className="transform hover:scale-125  transition duration-100"
              >
                Skills
              </a>
              <a
                href="#project"
                className="transform hover:scale-125  transition duration-100"
              >
                Project
              </a>
              <a
                href="#contact"
                className="transform hover:scale-125  transition duration-100"
              >
                Contact
              </a>
            </div>

            <div className="hidden md:block" id="home">
              <button className="border-[1px] hover:border-none hover:text-white p-2 cursor-pointer hover:bg-[#04dae5] hover:text-black">
                <a href={Resume} download="Resume">
                  Download CV
                </a>
              </button>
            </div>

            <button className=" md:hidden text-2xl ">
              <i class="fa-solid fa-bars-staggered" onClick={toggleNav}></i>
            </button>

            {toggle && (
              <div
                className="fixed inset-0 pt-5  pl-6 bg-[#061229] h-[350px] z-10 md:hidden"
                id="nav-dialog"
              >
                <div className="flex flex-row items-center justify-between">
                  <div id="nav_ber" className="text-2xl">
                    <h2>AR.</h2>
                  </div>
                  <div className="flex flex-row justify-end px-14">
                    <button className="md:hidden text-2xl" onClick={toggleNav}>
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <a href="#home" className="block my-3">
                    Home
                  </a>
                  <a href="#about" className="block my-3">
                    About
                  </a>
                  <a href="#skills" className="block my-3">
                    Skills
                  </a>
                  <a href="#project" className="block my-3">
                    Project
                  </a>
                  <a href="#contact" className="block my-3">
                    Contact
                  </a>
                </div>
                <div className="h-[1px] bg-gray-300"></div>
                <div className="md:hidden mt-6">
                  <button className="border-[1px] p-2 cursor-pointer hover:bg-white hover:text-black ">
                    <a href={Resume} download="Resume">
                      Download CV
                    </a>
                  </button>
                </div>
              </div>
            )}
          </nav>

          <div className=" text-white flex flex-col justify-center items-center text-center md:pt-20 pt-5 ">
            <div className="md:w-[220px] w-[150px]  border-1px border-black">
              <img src={images} alt="" />
            </div>
            <div>
              <TypeAnimation
                sequence={["Ashfakur Rahman...", 1000]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  display: "inline-block",
                  color: "#04dae5",
                }}
                repeat={Infinity}
              />
              <h1 className="text-md font-normal pb-20">
                A Creative & Front-End Developer
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
