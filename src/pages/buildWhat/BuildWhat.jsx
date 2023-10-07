import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function BuildWhat(props) {
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
      <motion.h2
        ref={ref}
        className="relative flex justify-center pb-4 top-[150vh] text-4xl text-slate-100  sm:text-4xl md:text-6xl lg:text-8xl"
        variants={{
          hidden: { opacity: 0, transition: { delay: 0.5 } },
          visible: { opacity: 1, transition: { delay: 0.5 } },
        }}
        initial="hidden"
        animate={mainControls}
      >
        Projects?
      </motion.h2>
    </>
  );
}
