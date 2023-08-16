import { motion } from "framer-motion";
import "./Home.css";
import React from "react";
import Icons from "../../components/icons/Icons";
export default function Home() {
  return (
    //HERO-TEXT
    <div>
      <motion.div
        animate={{ opacity: 1, y: "40vh" }}
        transition={{
          ease: "easeOut",
          duration: 2,
          type: "spring",
          stiffness: 50,
        }}
        className="hero-text sm:text-3xl md:text-5xl lg:text-7xl"
        initial={{ opacity: 0 }}
      >
        Rajdip Sinha
      </motion.div>

      {/* HERO-TEXT-END */}
      <motion.div
        initial={{ opacity: 0 }} // Set initial opacity to 0
        animate={{ opacity: 1 }} // Animate opacity to 1
        transition={{
          delay: 0.5, // Delay the appearance of the Icons component
          duration: 0.5, // Animation duration
        }}
      >
        <Icons />
      </motion.div>
    </div>
  );
}
