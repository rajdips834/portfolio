import "./About.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { React, useRef, useEffect, useState } from "react";
import "./About.css";
import AnimatedTextWord from "../../components/typewriter/AnimatedTextWord";

export default function About() {
  const [myRef, inView] = useInView();
  return (
    <div className=" text-slate-100">
      <h1 ref={myRef} className=" about text-8xl">
        <AnimatedTextWord text="Meet Rajdip, the React Whiz."></AnimatedTextWord>
      </h1>
      <div className="top-[90vh] relative gap-10 justify-center flex flex-wrap">
        <motion.div
          initial={{ x: "-400%" }}
          animate={{ x: "calc(100vw - 50%)" }}
          className="p-4  relative text-2xl w-[40vw]"
        >
          Rajdip is a React developer with an undeniable talent for creating
          jaw-dropping applications. He’s worked with leading companies to
          elevate their web development game.
        </motion.div>
        <motion.div className="p-4 relative text-2xl w-[40vw]">
          Out with the old, in with the new! Rajdip takes ordinary web apps and
          transforms them into masterpieces. Are you ready to dive into a world
          of impeccable design and functionality? Buckle up and join the ride!
        </motion.div>
      </div>
    </div>
  );
}
