import React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  useEffect(() => {
    if (isInView) {
      ref.current.classList.add("animate-bounce");
    }
  }, [isInView]);

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      <motion.div variants={container} initial="hidden" animate="visible">
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ marginRight: "15px" }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedTextWord;
