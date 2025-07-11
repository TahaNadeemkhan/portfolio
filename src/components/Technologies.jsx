import { FaPython } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiApachekafka } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiLangchain } from "react-icons/si";
import { motion } from "framer-motion";

// Bouncing transition for all icons
const bounceTransition = {
  y: {
    repeat: Infinity,  // Repeat the animation infinitely
    repeatType: "reverse",  // Alternate the direction after each cycle
    duration: 1.5,  // Duration for one complete cycle (up-down)
    ease: "easeInOut"  // Smooth transition effect
  }
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Icon 1 (React) - Moving up first */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [-7, 7] }}  // Moves up first
          transition={bounceTransition}
        >
          <SiTensorflow  className="text-7xl text-red-600" />
        </motion.div>

        {/* Icon 2 (Next.js) - Moving down first */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [7, -7] }}  // Moves down first
          transition={bounceTransition}
        >
          <SiApachekafka className="text-7xl" />
        </motion.div>

        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [7, -7] }}  // Moves down first
          transition={bounceTransition}
        >
          <SiLangchain className="text-7xl text-gray-300" />
        </motion.div>
        {/* Icon 3 (PostgreSQL) - Moving up first */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [-7, 7] }}  // Moves up first
          transition={bounceTransition}
        >
          <BiLogoPostgresql className="text-7xl text-blue-800" />
        </motion.div>

        {/* Icon 4 (Flask) - Moving down first */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [7, -7] }}  // Moves down first
          transition={bounceTransition}
        >
          <FaPython className="text-7xl text-yellow-300" />
        </motion.div>

        {/* Icon 5 (Kubernetes) - Moving up first */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [-7, 7] }}  // Moves up first
          transition={bounceTransition}
        >
          <FaDocker className="text-7xl text-blue-500" />
        </motion.div>

        {/* Icon 6 (OpenAI) - Moving down first */}
      </motion.div>
    </div>
  );
};

export default Technologies;
