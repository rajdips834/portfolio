import { FaGithub, FaLinkedin, FaTwitch, FaTwitter } from "react-icons/fa";
import React from "react";
import "./Icons.css";
import { motion } from "framer-motion";
export default function Icons() {
  const githubClickHandler = () => {
    console.log("github");
  };
  return (
    <motion.ul
      className="flex flex-row gap-8 "
      style={{
        position: "absolute",
        top: "60%", // Position the ul element below the motion.div
        left: "50%", // Center horizontally
        transform: "translateX(-50%)", // Adjust centering
        marginTop: "80px", // Add some space between motion.div and ul
      }}
    >
      <motion.li
        whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        initial={{ opacity: 0, transitionDelay: 0.5 }}
      >
        <a href="https://github.com/rajdips834">
          <FaGithub className="h-12 w-9 icons"></FaGithub>
        </a>
      </motion.li>

      <motion.li
        whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeOut",
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        initial={{ opacity: 0, transitionDelay: 1 }}
      >
        <a href="www.linkedin.com/in/rajdip-sinha-23789a220">
          <FaLinkedin
            onclick={githubClickHandler}
            className="h-12 w-9 icons"
          ></FaLinkedin>
        </a>
      </motion.li>

      <motion.li
        whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeOut",
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        initial={{ opacity: 0, transitionDelay: 1.5 }}
      >
        <a href="https://www.twitch.tv/gigani6ga">
          <FaTwitch className="h-12 mx-auto w-9 icons"></FaTwitch>
        </a>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeOut",
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        initial={{ opacity: 0, transitionDelay: 2 }}
      >
        <a href="https://twitter.com/rajdips834">
          <FaTwitter className="h-12 w-9 icons"></FaTwitter>
        </a>
      </motion.li>
    </motion.ul>
  );
}
