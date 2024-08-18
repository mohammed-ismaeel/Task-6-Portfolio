// import About from "../components/About/About"
// import NavBar from "../components/NavBar/NavBar"

import Contact from "../components/Contact/Contact";
import Discuss from "../components/Discuss/Discuss";
import Footer from "../components/Footer/Footer";

import Projects from "../components/ProjectsSection/Projects";
import Skills from "../components/Skills/Skills";
import Services from "../components/Srevices/Services";
import Header from "../components/header/Header";
// import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Services />
      <Skills />
      <Projects />
      <Discuss />
      <Contact />
      <Footer />
      {/* <ProjectDetails /> */}
    </div>
  );
};

export default HomePage;
