import React, { useState } from "react";
import imageIcon from "../Images/next-js.svg";
import imageTailwind from "../Images/tailwind-css.svg";

function Skill() {
  const [html, setHtml] = useState(90);
  const [css, setCss] = useState(85);
  const [js, setJs] = useState(75);
  const [react, setReact] = useState(70);
  const [redux, setRedux] = useState(60);
  const [nextjs, setNextjs] = useState(60);
  const [tailwind, setTailwind] = useState(80);
  const [github, setGithub] = useState(85);
  return (
    <>
      <div id="skills" className="bg-[#091c2a]  text-white pt-10">
        <h1 className="text-3xl font-bold text-center">
          My <span className="text-[#04dae5]"> Skills</span>
        </h1>
        <div className=" flex flex-col sm:flex-row justify-evenly py-10  gap-0 sm:gap-10 px-10 items-center">
          <div>
            <div>
              <span className="text-red-500 text-2xl">
                <i class="fa-brands fa-html5"></i>
              </span>
              <h1 className="text-xl">
                Html <span>{html}%</span>
              </h1>
              <input
                type="range"
                min={0}
                max={100}
                step={10}
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                disabled
              />
            </div>

            <div className="py-10">
              <span className="text-[#04dae5] text-2xl">
                <i class="fa-brands fa-css3-alt"></i>
              </span>
              <h1>
                CSS <span>{css}%</span>
              </h1>
              <input
                type="range"
                min={0}
                max={100}
                step={10}
                value={css}
                onChange={(e) => setCss(e.target.value)}
                disabled
              />
            </div>

            <div>
              <span className="text-yellow-400 text-2xl">
                <i class="fa-brands fa-square-js"></i>
              </span>
              <h1>
                JAVASCRIBE <span>{js}%</span>
              </h1>
              <input
                type="range"
                min={0}
                max={100}
                step={10}
                value={js}
                onChange={(e) => setJs(e.target.value)}
                disabled
              />
            </div>
            <div className="py-10">
              <span className="text-sky-400 text-2xl">
                <i class="fa-brands fa-react"></i>
              </span>
              <h1>
                REACT <span>{react}%</span>
              </h1>
              <input
                type="range"
                min={0}
                max={100}
                step={10}
                value={react}
                onChange={(e) => setReact(e.target.value)}
                disabled
              />
            </div>
          </div>
          <div>
            <div className="py-10">
              <span className="text-green-500 text-2xl">
                <i class="fa-brands fa-react"></i>
              </span>
              <h1>
                REDUX <span>{redux}%</span>
              </h1>
              <input
                type="range"
                min={0}
                max={100}
                step={10}
                value={redux}
                onChange={(e) => setRedux(e.target.value)}
                disabled
              />
            </div>
            <div>
              <span>
                <img src={imageIcon} alt="nextjs icon" />
              </span>
              <h1 className="pt-[5px]">
                NEXT. JS <span>{nextjs}%</span>
              </h1>
              <input
                type="range"
                min={0}
                max={100}
                step={10}
                value={nextjs}
                onChange={(e) => setNextjs(e.target.value)}
                disabled
              />
            </div>
            <div className="py-5">
              <span className="text-white text-2xl">
                <img
                  src={imageTailwind}
                  alt="tailwind icon"
                  className="w-[50px]"
                />
              </span>
              <h1 className="pt-2">
                TAILWIND CSS <span>{tailwind}%</span>
              </h1>
              <input
                type="range"
                min={0}
                max={100}
                step={10}
                value={tailwind}
                onChange={(e) => setTailwind(e.target.value)}
                disabled
              />
            </div>
            <div className="py-5">
              <span className="text-white text-2xl">
                <i class="fa-brands fa-github"></i>
              </span>
              <h1>
                Github <span>{github}%</span>
              </h1>
              <input
                type="range"
                min={0}
                max={100}
                step={10}
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
