const AchievementCard = ({ value, detail }) => {
  return (
    <div className="achievement-card w-1/3 text-center bg-gray-300 rounded-md py-3 px-5">
      <h2 className=" text-3xl font-semibold text-slate-700">{value}</h2>
      <p className="text-mygray">{detail}</p>
    </div>
  );
};

export default AchievementCard;
