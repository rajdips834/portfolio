import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import { useAnimation } from "framer-motion";

export default function Projects(props) {
  const projectLinks = [
    {
      name: "Portfolio",
      link: "https://github.com/rajdips834/portfolio",
      image: "assets/portfolio.png",
    },
    {
      name: "Praani",
      link: "https://praani.netlify.app/",
      image: "assets/praani.png",
    },
    {
      name: "Healify",
      link: "https://hack4bengal-lilac.vercel.app/",
      image: "assets/healify.png",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {projectLinks.map((project, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={{
            hidden: { opacity: 0, transition: { delay: 1.5 } },
            visible: { opacity: 1, transition: { delay: 1.5 } },
          }}
          initial="hidden"
          animate={controls}
          transition={{ delay: 1, duration: 1.5, type: "tween", damping: 12 }}
          className="top-[160vh]  relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <ProjectCard
            name={project.name}
            link={project.link}
            image={project.image}
          />
        </motion.div>
      ))}
    </div>
  );
}
