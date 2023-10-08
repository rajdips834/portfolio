import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import ImageSlider from "../../components/ImageSlider";
import dp from "../../assets/dp.png";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div style={{ position: "relative", top: "100vh" }}>
      <motion.div
        ref={ref}
        className="relative flex w-full pl-4 text-xs md:pl-11 md:text-4xs lg:text-8xs md:w-1/2 text-slate-100"
        variants={{
          hidden: { opacity: 0, x: 400 },
          visible: { opacity: 0.5, x: 190, transition: { duration: 0.5 } },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 1,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        Building is what I do
      </motion.div>

      <motion.h1
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: 400 },
          visible: { opacity: 1, x: 190, transition: { duration: 0.5 } },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 1,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="relative flex w-full pl-4 text-4xl md:w-1/2 md:pl-10 md:text-6xl lg:text-8xl text-slate-100"
      >
        ABOUT
      </motion.h1>

      <div className="relative flex flex-col-reverse w-full sm:flex-row md:w-1/2">
        <div className="flex items-center w-full mt-10 h-1/2">
          <motion.p
            initial={{ opacity: 0, x: 400 }}
            whileInView={{ opacity: 1, x: 165 }}
            transition={{
              duration: 0.5,
              delay: 1,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="flex flex-col gap-6 p-6 text-center text-grayscale-50"
          >
            <span className="text-slate-600">
              Hello there, I'm so happy you are here! :)
            </span>
            <span className="text-slate-300">
              My name is Rajdip, I'm 19 and a second year computer science
              student based in India. I have a strong passion for the
              technologies related to front-end development and sustainability.
            </span>
            <span className="text-slate-300">
              Outside of my regular activities, I'm into drawing whenever I have
              some free time. I'm also a huge dog lover and enjoy playing chess
              for fun.
            </span>
            <span className="text-slate-300">
              I'm continuously thrilled to partner with individuals and teams
              who wholeheartedly embrace my fervor for crafting extraordinary
              experiences. Your visit to my portfolio is deeply appreciated!
            </span>
          </motion.p>
          <motion.img
            ref={ref}
            initial={{ x: 400, opacity: 0 }}
            whileInView={{ x: 500, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="hidden w-1/2 h-1/2 bg-slate-200 md:block"
            src={dp}
          ></motion.img>
        </div>
      </div>
    </div>
  );
}
