import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact(){
  return (
      <div className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20" id="contact">
        <div className="text-5xl mb-10 max-[500px]:text-3xl max-[500px]:mb-5">Contact Me</div>
        <p className="text-gray-400 text-base">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </p>
        {/* <a href="tel:+923349009827" className="text-gray-400 text-2xl hover:text-white">☎️ +91-3349009827</a> */}
        <a href="mailto:syedtalhadev7@gmail.com" className="text-gray-400 text-2xl hover:text-white">manviguptakvss@gmail.com</a>
        <div className="flex justify-center gap-5 mt-10">
          <a href="https://github.com/pythoncoder08765" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gmanvi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaLinkedin />
          </a>
        </div>
      </div>
  )
}

export default Contact;