import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Contact from "./Contact";

export default function LetsTalk(props) {
  const ref = useRef(null, { once: true });
  const isInView = useInView(ref, { threshold: 0.5, triggerOnce: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    if (!isInView) {
      mainControls.start("hidden");
    }
  }, [isInView]);
  return (
    <>
      <motion.h1
        ref={ref}
        className="relative flex justify-center items-center pb-4 text-4xl text-slate-100 top-[200vh] sm:text-4xl md:text-6xl lg:text-8xl"
        variants={{
          hidden: { opacity: 0, transition: { delay: 1 } },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5, type: "tween", damping: 12 }}
      >
        Let's talk.
      </motion.h1>

      <Contact />
    </>
  );
}
