import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-[#061229] text-white py-5 pb-5 px-10">
        <h1 className="text-center font-bold ">AR.</h1>
        <div className="flex flex-row gap-5 text-sm justify-center pt-5">
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

        <div className="flex items-center gap-3 text-xl  justify-center pt-5">
          <a
            href="https://www.linkedin.com/in/mdashfakurrahman/"
            className="text-[#04dae5] transform hover:scale-125  transition duration-100"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/md-asfak"
            className="text-[#04dae5] transform hover:scale-125  transition duration-100"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/___ashfakur_rahman____/"
            className="text-[#04dae5] transform hover:scale-125  transition duration-100"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
