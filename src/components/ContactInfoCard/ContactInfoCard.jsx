import "./ContactInfoCardStyle.css";
const ContactInfoCard = ({ image, label, value }) => {
  return (
    <div className="contact-card">
      <img src={image} alt="" />
      <div className="information">
        <p className="label">{label}</p>
        <p className="vs">{value}</p>
      </div>
    </div>
  );
};

export default ContactInfoCard;
