
import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By VishnuSanjay.</div>
      <div>
        <Link to={"mailto:vishnusanjay262004@gmail.com"} target="_blank">
          <MdEmail />
        </Link>
        <Link to={"https://twitter.com/vishnusanjay9"} target="_blank">
          <FaTwitter />
        </Link>
        <Link to={"https://www.linkedin.com/in/vishnu-sanjay-rayavarapu-b859b7228/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/sanju_26_01/"} target="_blank">
          <RiInstagramFill />
        </Link>
        <Link to={"https://github.com/yourprofile"} target="_blank">
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
