import Button from "../Button/Button";
import "./AboutStyle.css";
import aboutImg from "./../../assets/images/my.jpg";

const About = () => {
  return (
    <div
      className="about w-4/5 bg-white flex justify-between items-center py-12 px-24 absolute bottom-0 left-1/2 -translate-x-2/4 translate-y-7 rounded-xl"
      id="About"
    >
      <div className="about-img relative w-80">
        <img src={aboutImg} alt="" className="w-full" />
        <div className="social-icons w-4/5 bg-white absolute bottom-0 left-1/2 p-1 rounded-md">
          <ul className="flex list-none justify-between">
            <li className=" hover:scale-125">
              <a
                href="https://www.facebook.com/profile.php?id=100021454752122&mibextid=ZbWKwL"
                target="_blank"
                className=" text-4xl text-mouve"
              >
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li className=" hover:scale-125">
              <a
                href="https://t.me/Moh_Ismaeel"
                target="_blank"
                className=" text-4xl text-mouve"
              >
                <i class="fa-brands fa-telegram"></i>
              </a>
            </li>
            <li className=" hover:scale-125">
              <a
                href="www.linkedin.com"
                target="_blank"
                className=" text-4xl text-mouve"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className=" hover:scale-125">
              <a href="" target="_blank" className=" text-4xl text-mouve">
                <i class="fa-brands fa-square-github"></i>
              </a>
            </li>
            <li className=" hover:scale-125">
              <a
                href="https://www.instagram.com/mohammad___ismaeel?igsh=MTE5ZGoycWZiejIwbw=="
                target="_blank"
                className=" text-4xl text-mouve"
              >
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="about-desc w-1/2">
        <h1 className="text-blacky font-semibold text-3xl">
          I am Junior Front-End Developer{" "}
        </h1>
        <p className="pt-6 text-mygray">
          Hello! I'm Mohammed, a passionate frontend developer with a keen eye
          for design and user experience. I specialize in creating responsive
          and interactive web interfeaces that not only look great but also
          provide a seamless user experience. <br className="mb-2" /> I'm always
          excited to collaborate with like-minded individuals and companies to
          create amazing digital experiences that leave a lasting impresion.
          Let's connect and bring your ideas to life!
        </p>
        <div className="buttons pt-5 flex gap-3">
          <Button contentButton={"My Project"} href={"#Projects"} />
          <button
            id="download-button"
            className="bg-transparent w-48 text-mouve border border-solid border-mouve hover:bg-mouve hover:text-white hover:cursor-pointer hover:border hover:border-solid hover:border-white"
          >
            Downlaod CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
