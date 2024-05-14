import React from "react";
import Resume from "../Images/Ashfakur Resume.pdf";
import images_2 from "../Images/image_3.jpg";

function About() {
  return (
    <>
      <div
        id="about"
        className="bg-[#061229] text-white grid md:grid-cols-2 sm:grid-cols-1 py-10 px-5 place-items-start md:place-items-center gap-3"
      >
        <div>
          <img
            src={images_2}
            alt="image2"
            className="w-[100%] md:w-[80%] h-[300px] md:h-[420px]  rounded-md"
          />
        </div>
        <div>
          <h1 className="text-3xl pb-5">
            About <span className="text-[#04dae5]">Me</span>
          </h1>
          <h2 className="text-xl">Front-End Development</h2>
          <p>
            <span className="text-3xl text-[#04dae5] ">T</span>o work in an
            organization which provides me with ample opportunities to enhance
            my skills and knowledge along with contributing to the growth of the
            organisation. Looking for Opportunities in Corporate my skills and
            training to help the company grow.
          </p>

          <div className="border-2 border-[#04dae5] my-5  p-5 flex flex-col gap-5">
            <h1>
              <span className="font-bold pr-3">Name: </span> Sk Md Ashfakur
              Rahman
            </h1>
            <h1>
              <span className="font-bold pr-3"> Phone:</span>
              +917278756641
            </h1>
            <h1>
              <span className="font-bold pr-3">Email: </span>
              skmdashfakurrahman@gmail.com
            </h1>

            <h1>
              <span className="font-bold pr-3">Address: </span> West Bengal,
              Kolkata, Howrah, Pin-711316
            </h1>
            <h1>
              <span className="font-bold pr-3">Exprience: </span> Fresher
            </h1>
          </div>

          <div className="flex items-start justify-start  gap-3 text-2xl py-3">
            <a
              href="https://www.linkedin.com/in/mdashfakurrahman/"
              target="_blank"
              className="text-[#04dae5] transform hover:scale-125  transition duration-100"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/md-asfak"
              target="_blank"
              className="text-[#04dae5] transform hover:scale-125  transition duration-100"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/___ashfakur_rahman____/"
              target="_blank"
              className="text-[#04dae5] transform hover:scale-125  transition duration-100"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
          <button className="bg-[#04dae5] rounded-sm p-2 cursor-pointer  hover:bg-white hover:text-[#04dae5]">
            <a href={Resume} download={Resume}>
              Download CV
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
