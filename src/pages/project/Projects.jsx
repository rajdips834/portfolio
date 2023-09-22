import ProjectCard from "./ProjectCard";

export default function Projects(props) {
  const projectLinks = [
    {
      name: "Portfolio",
      link: "https://github.com/rajdips834/portfolio",
      image: "",
    },
    {
      name: "Portfolio",
      link: "https://github.com/rajdips834/portfolio",
      image: "",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap">
        {projectLinks.map((project) => {
          <ProjectCard
            name={project.name}
            link={project.link}
            image={project.image}
          />;
        })}
      </div>
    </>
  );
}
