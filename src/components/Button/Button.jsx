import "./ButtonStyle.css";
const Button = ({ contentButton, href, target }) => {
  return (
    <button
      className="button w-24 h-9 
    border-none bg-mouve font-semibold rounded hover:cursor-pointer hover:bg-white hover:border-mouve hover:border hover:border-solid"
    >
      <a href={href} target={target} className="text-white ">
        {contentButton}
      </a>
    </button>
  );
};

export default Button;
