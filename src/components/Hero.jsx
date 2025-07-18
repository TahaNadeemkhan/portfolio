import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile-picc.jpeg";
import {  motion } from "framer-motion";

const container=(delay)=>({
  hidden:{x: -100,opacity:0},// Initial state: moved -100px left and fully transparent
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay: delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          {" "}
          {/* This is a child of the Flexbox container that takes up full width on smaller screens (w-full) and half the width on larger screens (lg:w-1/2). */}
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
             variants={container(0)}
             initial="hidden"
             animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Taha Khan{" "}
            </motion.h1>
            <motion.span  variants={container(0.5)}
             initial="hidden"
             animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
             Agentic AI Developer
            </motion.span>
            <motion.p  variants={container(1)}
             initial="hidden"
             animate="visible" className="my-2 mx-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img variants={container(1)} initial={{x:100,opacity:0}}
            animate="visible"

             src={profilePic} alt="profile pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
