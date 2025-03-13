import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  let date = new Date();
  return (
    <>
      <footer>
        <div className="social-icons">
          <NavLink to="#" className="facebook">
            <FaFacebook />
          </NavLink>
          <NavLink to="#" className="twitter">
            <FaTwitter />
          </NavLink>
          <NavLink to="#" className="instagram">
            <FaInstagram />
          </NavLink>
          <NavLink to="#" className="discord">
            <FaDiscord />
          </NavLink>
        </div>
        <p>&copy; CopyRight {date.getFullYear()} Hk-AniWatch.</p>
        <p>
          All Rights Reserved. Hk-AniWatch does not host any of the videos and
          is not responsible for content uploaded by third parties.
        </p>
      </footer>
    </>
  );
};

export default Footer;
