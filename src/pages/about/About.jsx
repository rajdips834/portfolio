import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { React, useRef } from "react";
import "./About.css";
import AnimatedTextWord from "../../components/typewriter/AnimatedTextWord";

export default function About() {
  const [myRef, inView] = useInView();
  return (
    <div className="text-slate-100">
      <h1
        ref={myRef}
        className="relative justify-center pb-4 text-4xl align-middle about sm:text-4xl md:text-6xl lg:text-8xl"
      >
        <AnimatedTextWord text="Meet Rajdip, the React Whiz." />
      </h1>
      <div className="top-[90vh] relative gap-10 justify-center flex flex-wrap">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, type: "tween", damping: 12 }}
          className="relative w-full pt-32w` text-xl md:text-2xl lg:text-2xl xl:text-2xl md:w-1/2"
        >
          Rajdip is a React developer with an undeniable talent for creating
          jaw-dropping applications. He’s worked with leading companies to
          elevate their web development game.
        </motion.div>
        <motion.div
          initial={{ x: "120%", y: "110%" }}
          animate={{ x: "0%", y: "110%" }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "intertia",
            damping: 1,
          }}
          className="relative w-full p-4 text-xl md:text-2xl lg:text-2xl xl:text-2xl md:w-1/2"
        >
          Out with the old, in with the new! Rajdip takes ordinary web apps and
          transforms them into masterpieces. Are you ready to dive into a world
          of impeccable design and functionality? Buckle up and join the ride!
        </motion.div>
      </div>
    </div>
  );
}
