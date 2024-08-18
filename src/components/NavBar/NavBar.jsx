import Button from "../Button/Button";
const NavBar = () => {
  return (
    <nav className="w-full h-20 flex justify-between items-center bg-white fixed z-50 px-20 py-0">
      <div className="logo text-2xl font-bold text-blacky">
        Portfo<span className="text-mouve">lio</span>.
      </div>
      <ul className="flex gap-7">
        <li>
          <a
            href="#"
            className="text-blacky font-medium hover:text-mouve hover:cursor-pointer hover:font-semibold no-underline"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#About"
            className="text-blacky font-medium hover:text-mouve hover:cursor-pointer hover:font-semibold no-underline"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Services"
            className="text-blacky font-medium hover:text-mouve hover:cursor-pointer hover:font-semibold no-underline"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#Skills"
            className="text-blacky font-medium hover:text-mouve hover:cursor-pointer hover:font-semibold no-underline"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className="text-blacky font-medium hover:text-mouve hover:cursor-pointer hover:font-semibold no-underline"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className="text-blacky font-medium hover:text-mouve hover:cursor-pointer hover:font-semibold no-underline"
          >
            Contact
          </a>
        </li>
      </ul>
      <Button contentButton={"Let's Talk"} href={"#Contact"} />
    </nav>
  );
};

export default NavBar;
