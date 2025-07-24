"use client"

import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/profile-pic.png"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
})

const imageContainer = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-[45%]">
          <div className="flex flex-col items-center lg:items-start lg:pl-14">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Taha Khan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Agentic AI Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
          <motion.div variants={imageContainer(1.2)} initial="hidden" animate="visible" className="relative group">
            {/* 3D Container with multiple layers */}
            <div className="relative">
              {/* Shadow layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900/80 rounded-3xl blur-xl transform translate-x-6 translate-y-6 scale-105"></div>

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-700 to-neutral-800 p-2 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-2">
                {/* Inner frame */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-neutral-100 to-amber-100 shadow-2xl">
                  <img
                    src={profilePic || "/placeholder.svg"}
                    alt="Taha Khan - Agentic AI Developer"
                    className="h-[500px] w-[400px] object-cover object-center transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Realistic lighting overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-900/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/5 via-transparent to-white/5"></div>

                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-neutral-900/20"></div>
                </div>

                {/* 3D edge highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-3xl"></div>
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-l-3xl"></div>
              </div>

              {/* Ambient light effects */}
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-gradient-to-br from-pink-300/15 to-slate-600/15 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
