import React from "react";

export default function Cart(props) {
  return (
    <>
      <card className="rounded-md  flex flex-col justify-start items-start border-[1px] py-5 px-[10px] w-[293px]">
        <div className="w-full">
          <img src={props.img} alt="image" className="w-[100%] h-[150px]  " />
        </div>

        <div className=" py-5 flex flex-col justify-start items-start w-[270px]">
          <h1 className="text-xl font-semibold">{props.title}</h1>
          <p className="pt-2 pb-5">{props.description}</p>
          <div className="flex flex-row gap-10">
            <a
              href={props.live}
              className="py-1 px-2 bg-[#04dae5] rounded-md"
              target="_blank"
            >
              Live Preview
            </a>
            <a
              href={props.github}
              className="py-1 px-2 bg-white text-[#04dae5] rounded-md"
              target="_blank"
            >
              Check Github
            </a>
          </div>
        </div>
      </card>
    </>
  );
}
