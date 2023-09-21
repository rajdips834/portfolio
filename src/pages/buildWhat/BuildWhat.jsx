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
        className="relative flex justify-center pb-4 top-[180vh] text-4xl text-slate-100  sm:text-4xl md:text-6xl lg:text-8xl"
        variants={{
          hidden: { opacity: 0, transition: { delay: 1 } },
          visible: { opacity: 1, transition: { delay: 1 } },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.5, type: "tween", damping: 12 }}
      >
        Build what?
      </motion.h2>
    </>
  );
}
