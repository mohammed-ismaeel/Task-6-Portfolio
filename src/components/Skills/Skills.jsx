import "./SkillsStyle.css";
import pulse from "./../../assets/images/pulse-outline.svg";
import Button from "../Button/Button";
import SkillsCard from "../SkillsCard/SkillsCard";
const Skills = () => {
  return (
    <div className="parent">
      <div
        className="skills w-4/5 mx-auto my-0 py-20 px-0 flex justify-between"
        id="Skills"
      >
        <d iv className="left-skills max-w-md flex justify-center items-center">
          <div className="content">
            <p className="top-title text-mouve text-lg w-max py-1 px-3 border border-solid border-mouve">
              My Skills
            </p>
            <h1 className="text-blacky text-4xl pt-5 w-96">
              Why Hire Me For Your Next{" "}
              <span className="text-mouve">Project?</span>
            </h1>
            <p className=" pt-5 text-lg text-mygray">
              Beccause I specialize in developing high-quality front-end
              interfaces with attravtive designs that attract customers, and I
              have experience and skills in using the latest technologies and
              tools in the field of front-end development.
            </p>
            <Button contentButton={"Hire Me"} href={"#Contact"} />
          </div>
        </d>
        <div className="right-skills w-1/2 flex justify-between">
          <div className="cards h-96 flex gap-10">
            <div className="left flex justify-between flex-col gap-12">
              <SkillsCard
                icon="fa-solid fa-display"
                title="Responsive Design"
                desc="I specialize in creating websites that provide an optimal
                  viewing experience across various devices by adapting to
                  different screen sizes."
              />
              <SkillsCard
                icon="fa-solid fa-chalkboard-user"
                title="UX Optimization"
                desc="I specialize in improving website usability for enhanced
                  visitor engagement and satisfaction."
              />
            </div>
            <div className="right flex justify-center items-center">
              <SkillsCard
                icon="fa-brands fa-sketch"
                title="Advanced Front-end Technologies"
                desc="Skilled in HTML5, CSS3, React, Tailwind, BootStrap for
                creating dynamic web apps with modern design standards."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
