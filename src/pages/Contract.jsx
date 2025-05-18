import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineGithub } from "react-icons/ai";
import { FaMapMarkerAlt, FaFacebookF, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="mx-[20%]">
      <h2 className="text-2xl  mb-4">Contact Info :</h2>
      <ul className="space-y-3">
        <li className="flex items-center">
          <AiOutlineMail className="text-[#4b4b9b] mr-2" size={20} />
          <span>poramate.pro@gmail.com</span>
        </li>
        <li className="flex items-center">
          <AiOutlinePhone className="text-[#4b4b9b] mr-2" size={20} />
          <span>+66 83 832 4659</span>
        </li>
        <li className="flex items-center">
          <FaMapMarkerAlt className="text-[#4b4b9b] mr-2" size={20} />
          <span>Bangkok, Thailand</span>
        </li>
      </ul>

      {/* <h2 className="text-2xl font-bold mt-6 mb-4">Social Networks :</h2>
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4b4b9b] hover:text-blue-800"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4b4b9b] hover:text-pink-700"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4b4b9b] hover:text-black"
        >
          <AiOutlineGithub size={24} />
        </a>
      </div> */}
    </div>
  );
}

export default Contact;
