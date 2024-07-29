import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    id: 1,
    url: "https://www.instagram.com/_ranjeetttt/",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: "https://www.facebook.com/ranjeet.patell.9/",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: "https://x.com/ranjeetjs644",
    icon: <FaTwitter />,
  },
  {
    id: 4,
    url: "https://www.linkedin.com/feed/",
    icon: <FaLinkedin />,
  },
  {
    id: 5,
    url: "https://github.com/ranjeetjs644/",
    icon: <FaGithub />,
  },
];

function Social() {
  return (
    <div className="social   fixed bottom-0 left-1/2 transform -translate-x-1/2 p-2  text-gray-300 flex flex-row justify-center gap-5 hover:cursor-pointer sm:left-5 sm:top-1/2 sm:bottom-1/2 sm:flex-col sm:-translate-x-1  ">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          to={link.url}
          target="_blank"
          className="hover:text-teal-800 text-[22px] hover:scale-150 hover:cu transition-transform duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default Social;
