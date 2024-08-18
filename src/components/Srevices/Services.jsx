import ServicesCard from "../ServicesCard/ServicesCard";
const Services = () => {
  return (
    <div className="services w-4/5 mx-auto my-0 py-36 px-0" id="Services">
      <h1 className="text-blacky text-center text-4xl pb-6">Services</h1>
      <p className="text-mygray text-center w-4/5 my-0 mx-auto">
        I will show you some of my skills in designing and programming user
        interfaces, in addition to mmy experience in using modern web
        technologies and creative tools, Find out how I can help you turn your
        ideas into user experiences Amazing and innovative on the web!
      </p>
      <div className="cards flex justify-between gap-6 mt-12">
        <ServicesCard
          icon="fa-solid fa-mobile-screen-button"
          title="Responsive Web Design"
          desc="
            Providing websites that adapt to all screen sizes and devices for a
            seamless and consistent user experience."
        />
        <ServicesCard
          icon="fa-regular fa-face-smile-beam icon"
          title="User Interfaces Optimization"
          desc="
          Enhancing user interface to ensure an efficient and user-friendly
          experince."
        />
        <ServicesCard
          icon="fa-solid fa-magnifying-glass icon"
          title="Advanced UX/UI Solutions"
          desc="            Offering advanced solutions in user experience and interface design
          to guarantee high interactivity and attractiveness."
        />
        <ServicesCard
          icon="fa-solid fa-laptop-code icon"
          title="Frontend Development Expertise"
          desc="
          Expertise in devloping front-end interfaces using the latest
          technologies and tools to ensure efficient and smooth website
          performance."
        />
      </div>
    </div>
  );
};

export default Services;
