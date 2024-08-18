const Footer = () => {
  return (
    <footer className=" w-4/5  h-14 flex mx-auto my-0 justify-between items-center border-t border-solid border-gray-400">
      <p className="text-blacky text-sm font-medium">
        @ 2024. All Rights Reserved
      </p>
      <p className="text-blacky text-sm font-medium">
        Designed by
        <span className="text-mouve font-bold">MOHMAMMED ISMAEEL</span>
      </p>
      <ul className="social flex gap-2 list-none">
        <li className=" hover:scale-125">
          <a
            className="text-mouve text-2xl"
            href="https://www.facebook.com/profile.php?id=100021454752122&mibextid=ZbWKwL"
            target="_blank"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </li>
        <li className=" hover:scale-125">
          <a
            href="https://t.me/Moh_Ismaeel"
            target="_blank"
            className="text-mouve text-2xl"
          >
            <i class="fa-brands fa-telegram"></i>
          </a>
        </li>
        <li className=" hover:scale-125">
          <a
            href="www.linkedin.com"
            target="_blank"
            className="text-mouve text-2xl"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className=" hover:scale-125">
          <a
            href="www.linkedin.com"
            target="_blank"
            className="text-mouve text-2xl"
          >
            <i class="fa-brands fa-square-github"></i>
          </a>
        </li>
        <li className=" hover:scale-125">
          <a
            href="https://www.instagram.com/mohammad___ismaeel?igsh=MTE5ZGoycWZiejIwbw=="
            target="_blank"
            className="text-mouve text-2xl"
          >
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
