import "./About.css";
import { useRef, useEffect, useState } from "react";
import "./About.css";
import { motion } from "framer-motion";
import React from "react";
import AnimatedTextCharacter from "../../components/typewriter/AnimatedTextCharacter";
import AnimatedTextWord from "../../components/typewriter/AnimatedTextWord";

export default function About() {
  const myRef = useRef();
  const [myElementisvisible, setMyElementisvisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <div>
      <h1 ref={myRef} className=" about bg-amber-100 relative top-[90vh]">
        <AnimatedTextWord text="Meet Rajdip, the React Rockstart."></AnimatedTextWord>
      </h1>
    </div>
  );
}
