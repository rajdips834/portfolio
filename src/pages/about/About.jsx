import { motion, useInView, useAnimation } from "framer-motion";
import { React, useEffect, useRef } from "react";
import "./About.css";
import AnimatedTextWord from "../../components/typewriter/AnimatedTextWord";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <motion.h1
        className="relative flex justify-center pb-4 text-4xl text-slate-100 about sm:text-4xl md:text-6xl lg:text-8xl"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.5 } },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.5, type: "tween", damping: 12 }}
      >
        I like to build things.
      </motion.h1>

      <motion.h1
        className="relative flex justify-center pb-4 text-4xl text-slate-100 about sm:text-4xl md:text-6xl lg:text-8xl"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, y: "700%", transition: { delay: 0.5 } },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.5, type: "tween", damping: 12 }}
      >
        Build what?
      </motion.h1>
      <div
        ref={ref}
        className="top-[90vh] relative gap-10 justify-center flex flex-wrap"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 1 } },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.5, delay: 0.5, type: "tween", damping: 12 }}
          className=" text-slate-100 relative w-full pt-[2rem] text-xl md:text-2xl lg:text-2xl xl:text-2xl md:w-1/2"
        ></motion.div>
      </div>
    </>
  );
}
