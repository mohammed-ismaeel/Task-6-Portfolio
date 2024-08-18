import AchievementCard from "../AchievementCard/AchievementCard";
import Button from "../Button/Button";
import heroImg from "./../../assets/images/my.jpg";
const Hero = () => {
  return (
    <div className="hero w-4/5 h-screen flex justify-between items-center my-0 mx-auto pt-20">
      <div className="hero-text relative max-w-lg">
        <h1 className="text-blacky text-5xl font-semibold">
          Hello, I'm Mohammed Ismaeel
        </h1>
        <p className="my-info text-mygray text-lg py-4 px-0">
          I'm a Junior Front-End Dev based in Damascus, Syria. I strives to
          build Professional websites with high quality and smooth user
          experience, using the latest technologies and tools.
        </p>
        <Button contentButton={"Say Hello"} href={"#Contact"} />
        <div className="achievements-cards flex w-full gap-1 mt-16">
          <AchievementCard value={"1 Y."} detail={"Experince"} />
          <AchievementCard value={"12 +"} detail={"Project Compeleted"} />
          <AchievementCard value={"5"} detail={"Happy Client"} />
        </div>
      </div>
      <div className="hero-img w-96 rounded-full outline-mouve outline-1 outline">
        <img src={heroImg} alt="" className="w-full rounded-full" />
      </div>
    </div>
  );
};

export default Hero;
