import "./About.css";
import { motion } from "framer-motion";
import React from "react";
import AnimatedTextCharacter from "../../components/typewriter/AnimatedTextCharacter";
import AnimatedTextWord from "../../components/typewriter/AnimatedTextWord";
export default function About() {
  return (
    <div>
      <h1 className=" bg-amber-100 relative top-[90vh]">
        <AnimatedTextWord text="whah theee aaaa"></AnimatedTextWord>
      </h1>
    </div>
  );
}
