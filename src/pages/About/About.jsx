import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import ImageSlider from "../../components/ImageSlider";
import dp from "../../assets/dp.png";
export default function About() {
  const memoji = {
    image: [dp],
  };

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
    <>
      <motion.div
        ref={ref}
        className="relative flex pl-9 text-xs text-slate-100 top-[100vh] sm:text-4xs md:text-6xs lg:text-8xs"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0.5, transition: { duration: 0.5 } },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5, type: "tween", damping: 12 }}
      >
        Building is what i do
      </motion.div>

      <motion.h1
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5, type: "tween", damping: 12 }}
        className="relative flex pl-8 text-6xl text-slate-100 top-[100vh]"
      >
        ABOUT
      </motion.h1>

      <div className="relative top-[100vh] flex flex-col-reverse w-full sm:flex-row">
        <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
            <span className=" text-slate-600">
              Hello there, I'm so happy you are here! :)
            </span>
            <span className=" text-slate-300">
              My name is Rajdip, I'm 19 and a second year computer science
              student based in India. I have a strong passion for the
              technologies related to front-end development and sustanability.
            </span>
            <span className=" text-slate-300">
              Outside of my regular activities, I'm into drawing whenever I have
              some free time. I'm also a huge dog lover and enjoy playing chess
              for fun.
            </span>
            <span className=" text-slate-300">
              I'm continuously thrilled to partner with individuals and teams
              who wholeheartedly embrace my fervor for crafting extraordinary
              experiences. Your visit to my portfolio is deeply appreciated !
            </span>
          </motion.p>
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex items-center justify-center ">
              <ImageSlider images={memoji.image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
