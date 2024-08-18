import { Link, Navigate } from "react-router-dom";
import "./ProjectCardStyle.css";
const ProjectCard = ({
  keyy,
  projectImg,
  projectType,
  projectTitle,
  description,
}) => {
  return (
    <div
      className="project-card pb-8
     text-left max-w-80 border border-solid border-mouve rounded-lg"
    >
      <div className="img  h-36 overflow-hidden rounded-t-lg">
        <img src={projectImg} alt="" className="w-full" />
      </div>
      <div className="desc p-5">
        <p className="type-project text-xs font-semibold text-mygray uppercase">
          {projectType}
        </p>
        <h2 className="text-blacky text-xl font-semibold -mt-1 pb-1">
          {projectTitle}
        </h2>
        <p className="description text-sm pb-6 text-zinc-700">{description}</p>
        <Link to={`/Details/${keyy}`}>View More</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
