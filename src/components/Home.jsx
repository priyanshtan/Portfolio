import React from "react";

import pic from "../../public/photo.avif";

import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hello there! I'm Priyansh, a passionate and innovative MERN stack
              developer dedicated to crafting seamless web experiences. With a
              keen eye for detail and a love for clean, efficient code, I
              transform ideas into dynamic, user-friendly applications. Explore
              my portfolio to see how I blend creativity with cutting-edge
              technology to deliver top-notch solutions that not only meet but
              exceed expectations. Let’s build something amazing together!
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.instagram.com/tanwar.9998/"
                      target="_blank"
                    >
                      <FaInstagram className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/priyansh-tanwar-03783217a/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/qr/WOFAEPYKTSNLI1" target="_blank">
                      <FaWhatsapp className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/ptan9998" target="_blank">
                      <FaTelegram className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
            <br />
            <div className="flex justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/1FsCPyn2tjnCNEKLCi6UbDetYkGiTCrQe/view?usp=sharing"
                download="Priyansh_Tanwar CV.pdf"
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
