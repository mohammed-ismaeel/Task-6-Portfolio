import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectsStyle.css";
import Button from "../Button/Button";
import MyProjects from "../MyProjects";

const Projects = () => {
  return (
    <div className="parent bg-white">
      <div
        className="projects w-4/5 my-0 mx-auto py-20 px-0 text-center"
        id="Projects"
      >
        <h1 className="text-4xl text-blacky">
          My <span classname="text-mouve">Projects</span>
        </h1>
        <p className="text-mygray text-lg pt-5">
          Welcome to the review section of my projects. Here you will find a
          collection of prjects that I have devloped using my skills in user
          interface design and programming. Get ready to explore a world of
          creativity and attractive design.
        </p>
        <div className="flex justify-between flex-wrap gap-12 pt-14">
          {MyProjects?.map((ele, index) => {
            return (
              <ProjectCard
                keyy={index + 1}
                projectImg={ele.urlimage}
                projectType={ele.typeProject}
                projectTitle={ele.title}
                description={ele.desc}
              />
            );
          })}
        </div>
        <Button
          contentButton={"More Projects"}
          href={"https://github.com/Moh-Ismaeel"}
          target={"_blank"}
        />
      </div>
    </div>
  );
};

export default Projects;
