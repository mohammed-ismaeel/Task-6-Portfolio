import About from "../About/About";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import "./HeaderStyle.css";
const Header = () => {
  return (
    <header className=" relative bg-cover">
      <NavBar />
      <Hero />
      <About />
    </header>
  );
};

export default Header;
