import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

function About() {
  return (
    <div>
      <p className="p-[28px]">
        "Hi, I’m Mate, a Junior Software Developer with a passion for animation
        and interactive design. I recently completed the Junior Software
        Developer Bootcamp (JSD9) and have a strong foundation in building
        engaging web applications. I love tackling challenges, learning new
        technologies, and creating intuitive user experiences. With a background
        in engineering, I bring a problem-solving mindset to every project. My
        focus is on developing seamless animations and crafting dynamic,
        user-friendly applications that leave a lasting impression."
      </p>
      <div className="flex gap-[28px] justify-around">
        <ul className="flex flex-col">
          Tecnical skill
          <li>- JavaScript, HTML, CSS, Tailwind CSS, React</li>
          <li>- SQLite, MongoDB, Node.js</li>
          <li>- Git Version Control</li>
        </ul>
        <ul className="flex flex-col">
          Soft Skills
          <li>- Critical thinking and Problem-solving</li>
          <li>- Teamwork and Collaboration</li>
          <li>- Growth Mindset </li>
        </ul>
      </div>
      <div className="mt-[20px] mx-[24px] flex ">
        <a
          href="https://drive.google.com/file/d/10-MK4ucq9b07pf_rkxCzM2CWMncNfFOo/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-500 hover:underline"
        >
          <AiOutlineFilePdf size={24} />
          View My CV
        </a>
      </div>
    </div>
  );
}

export default About;
