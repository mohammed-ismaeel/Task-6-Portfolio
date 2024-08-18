import NavBar from "./../NavBar/NavBar";
import { useParams } from "react-router-dom";
import MyProjects from "../MyProjects";
const ProjectDetails = () => {
  let key = useParams();
  let x = MyProjects.find((e) => e.id == key.id);
  console.log(x.urlimage);
  return (
    <div className="all">
      <NavBar />
      <div className="project-details w-screen h-screen bg-white mx-auto my-0 flex items-center">
        <div className="detail-card w-4/5 h-4/6 relative mx-auto my-0 p-12 flex justify-between items-center border border-solid border-mouve rounded-xl">
          <a
            href="/#Projects"
            className="absolute top-0 right-0 bg-mouve p-3 rounded-tr-xl text-white"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </a>
          <div className="project-image touch-auto w-80 max-h-80 border border-solid border-blacky rounded overflow-y-auto">
            <img src={x.urlimage} alt="" className=" w-full" />
          </div>
          <div className="info max-w-lg">
            <div className="about-project">
              <h1 className="title-project text-3xl text-blacky font-semibold">
                {x.title}
              </h1>
              <p className="info-project pt-5 text-gray-700">{x.desc}</p>
              <div className="tools pt-5 pb-10">
                <h3 className=" text-xl text-blacky inline-block mr-5">
                  Tools :
                </h3>
                <span className=" text-xl text-mouve font-semibold">
                  {x.tools}
                </span>
              </div>
              <div className="link-project">
                <a
                  href={x.github}
                  target="_blank"
                  className="bg-mouve py-3 px-5 font-semibold text-white rounded-md no-underline hover:text-mouve hover:bg-white hover:border-solid hover:border hover:border-mouve"
                >
                  Show More on Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
