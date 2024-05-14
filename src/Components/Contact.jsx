import React from "react";

function Contact() {
  return (
    <>
      <div
        id="contact"
        className="bg-[#091c2a] flex flex-col sm:flex-row gap-10 py-10 px-5 justify-center items-center"
      >
        <div className="bg-white p-5 max-w-[350px] flex flex-col gap-3 rounded-md shadow-xl">
          <h2 className="text-2xl font-bold text-[#04dae5]">Sent Massage</h2>
          <p>
            Feel Free to contact us any time. We will get back to you as soon as
            we can!
          </p>
          <form action="#" className="flex flex-col justify-center gap-5">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-[90%] h-[35px]  outline-none border-[1px] border-[#676774] px-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-[90%] h-[35px]  outline-none border-[1px] border-[#676774] px-2"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-[90%] h-[35px]  outline-none border-[1px] border-[#676774] px-2"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-[90%] h-[35px] outline-none border-[1px] border-[#676774] pl-2"
              />
            </div>

            <textarea
              name="Massage"
              cols="30"
              rows="10"
              placeholder="Massage"
              className="w-[90%] h-[90px]  outline-none border-[1px] border-[#676774] px-2"
            ></textarea>
            <button className="bg-[#04dae5] w-[120px] text-white p-2 rounded-3xl text-sm">
              Sent Massage
            </button>
          </form>
        </div>

        <div className="bg-white py-5 pl-5 pr-2 max-w-[300px] h-[350px] flex flex-col gap-5 rounded-md shadow-xl">
          <div className="flex flex-row items-center gap-3">
            <span className="text-2xl text-[#04dae5]">
              <i className="fa-solid fa-phone"></i>
            </span>
            <div>
              <h4 className="font-semibold">Phone Number</h4>
              <p>+917278756641</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <span className="text-2xl text-[#04dae5]">
              <i className="fa-solid fa-envelope"></i>
            </span>

            <div>
              <h4 className="font-semibold">Email Address</h4>
              <span>skashfak18@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <span className="text-2xl text-[#04dae5]">
              <i class="fa-brands fa-whatsapp"></i>
            </span>

            <div>
              <h4 className="font-semibold">Whatsapp</h4>
              <p>+917278756641</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <span className="text-2xl text-[#04dae5]">
              <i className="fa-solid fa-location-dot"></i>
            </span>

            <div>
              <h4 className="font-semibold">Location</h4>
              <p>kolkata, Howrah, Uluberia, Pin-711316</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
