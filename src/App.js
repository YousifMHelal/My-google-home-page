import profile from "./profile.png";
import logo from "./Logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitch,
  FaGithub,
  FaStackOverflow,
  FaDev,
  FaFreeCodeCamp,
  FaPinterestP,
  FaDribbble,
  FaTiktok,
} from "react-icons/fa";
import {
  SiUpwork,
  SiGmail,
  SiLeetcode,
  SiUdemy,
  SiEdx,
  SiUnsplash,
  SiValorant,
  SiAmazon,
  SiTailwindcss,
} from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import { FiCodepen } from "react-icons/fi";
import { GiMonkey, GiWaves } from "react-icons/gi";
import { CgPexels } from "react-icons/cg";
import { TbBrandTed, TbBooksOff, TbBrandFramerMotion } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { DiCssTricks, DiW3C } from "react-icons/di";

function App() {
  return (
    // -----Info-----
    <div className="mt-8 flex items-center flex-col">
      <img
        className="w-[100px] text-center rounded-full border-2 blue-border border-transparent"
        src={profile}
        alt="Joe"
      />
      <h2 className="bg-gradient-to-r from-start-blue to-end-blue bg-clip-text text-3xl mt-2 font-bold heading">
        Yousif Mamdouh
      </h2>
      <div className="flex mt-3">
        <a href="https://yousifmhelal.github.io/My-portfolio/">
          <img className="icon w-[2rem]" src={logo} alt="yousif" />
        </a>
        <a href="https://www.facebook.com/">
          <FaFacebook className="icon" style={{ color: "#1877f2" }} />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram className="icon" style={{ color: "#e1306c" }} />
        </a>
        <a href="https://www.linkedin.com/">
          <FaLinkedinIn className="icon" style={{ color: "#0a66c2" }} />
        </a>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
          <SiGmail className="icon" style={{ color: "#EA4335" }} />
        </a>
        <a href="https://www.youtube.com/">
          <FaYoutube className="icon" style={{ color: "#ff0000" }} />
        </a>
        <a href="https://www.twitch.tv/">
          <FaTwitch className="icon" style={{ color: "#9146ff" }} />
        </a>
        <a href="https://github.com/">
          <FaGithub className="icon" style={{ color: "#f5f5f5" }} />
        </a>
        <a href="https://www.upwork.com">
          <SiUpwork className="icon" style={{ color: "#73bb44" }} />
        </a>
        <a href="https://www.paypal.com/">
          <BsPaypal className="icon" style={{ color: "#003087" }} />
        </a>
      </div>
      {/* -----All links----- */}
      <div className="w-full h-full flex">
        {/* -----Programming links----- */}
        <div className="relative left-10 top-5 w-[300px] h-[300px]">
          <div className="relative w-full h-full left-[-50%] flex justify-center items-center cursor-pointer">
            <h2 className="absolute left-[74%] text-2xl bg-gradient-to-r from-start-red to-end-red bg-clip-text font-bold heading">
              Programming
            </h2>
            <a
              className="round"
              style={{ "--i": "1" }}
              href="https://stackoverflow.com/"
            >
              <FaStackOverflow
                className="round-icon"
                style={{ color: "#f48024" }}
              />
            </a>
            <a
              className="round"
              style={{ "--i": "2" }}
              href="https://css-tricks.com/"
            >
              <DiCssTricks
                className="round-icon"
                style={{ color: "#E31B5F" }}
              />
            </a>
            <a
              className="round"
              style={{ "--i": "3" }}
              href="https://leetcode.com/"
            >
              <SiLeetcode className="round-icon" style={{ color: "#F89F1B" }} />
            </a>
            <a
              className="round"
              style={{ "--i": "4" }}
              href="https://www.w3schools.com/"
            >
              <DiW3C className="round-icon" style={{ color: "#4CAF50" }} />
            </a>
            <a className="round" style={{ "--i": "5" }} href="https://dev.to/">
              <FaDev className="round-icon" style={{ color: "#ffffff" }} />
            </a>
            <a
              className="round"
              style={{ "--i": "6" }}
              href="https://authn.edx.org/"
            >
              <SiEdx className="round-icon" style={{ color: "#1F9FD9" }} />
            </a>
            <a
              className="round"
              style={{ "--i": "7" }}
              href="https://www.udemy.com/"
            >
              <SiUdemy
                className="icon round-icon"
                style={{ color: "#BE32F5" }}
              />
            </a>
            <a
              className="round"
              style={{ "--i": "8" }}
              href="https://www.freecodecamp.org/"
            >
              <FaFreeCodeCamp
                className="round-icon"
                style={{ color: "#efefef" }}
              />
            </a>
          </div>
        </div>
        {/* -----Styles links----- */}
        <div className="relative left-[20%] bottom-[-150px] w-[300px] h-[300px]">
          <div className="relative w-full h-full left-[-50%] flex justify-center items-center cursor-pointer">
            <h2 className="absolute left-[92%] text-2xl bg-gradient-to-r from-start-red to-end-red bg-clip-text font-bold heading">
              Style
            </h2>
            <a
              className="round"
              style={{ "--i": "1" }}
              href="https://www.pinterest.com/"
            >
              <FaPinterestP
                className="round-icon"
                style={{ color: "#e60023" }}
              />
            </a>
            <a
              className="round"
              style={{ "--i": "2" }}
              href="https://dribbble.com/"
            >
              <FaDribbble className="round-icon" style={{ color: "#ea4c89" }} />
            </a>
            <a
              className="round"
              style={{ "--i": "3" }}
              href="https://unsplash.com/"
            >
              <SiUnsplash className="round-icon" style={{ color: "#fff" }} />
            </a>
            <a
              className="round"
              style={{ "--i": "4" }}
              href="https://www.pexels.com/"
            >
              <CgPexels className="round-icon" style={{ color: "#07A081" }} />
            </a>
            <a
              className="round"
              style={{ "--i": "5" }}
              href="https://www.framer.com/motion/"
            >
              <TbBrandFramerMotion
                className="round-icon"
                style={{ color: "#7C0CFE" }}
              />
            </a>
            <a
              className="round"
              style={{ "--i": "6" }}
              href="https://www.wallpaperflare.com/"
            >
              <AiFillCamera
                className="round-icon"
                style={{ color: "#B21C38" }}
              />
            </a>
            <a
              className="round"
              style={{ "--i": "7" }}
              href="https://getwaves.io/"
            >
              <GiWaves
                className="icon round-icon"
                style={{ color: "#0099FF" }}
              />
            </a>
            <a
              className="round"
              style={{ "--i": "8" }}
              href="https://tailwindcomponents.com/cheatsheet/"
            >
              <SiTailwindcss
                className="round-icon"
                style={{ color: "#0ED3CF" }}
              />
            </a>
          </div>
        </div>
        <div className="relative right-[-38%] top-5 w-[300px] h-[300px]">
          <div className="relative w-full h-full left-[-50%] flex justify-center items-center cursor-pointer">
            <h2 className="absolute left-[92%] text-2xl bg-gradient-to-r from-start-red to-end-red bg-clip-text font-bold heading">
              Links
            </h2>
            <a
              className="round"
              style={{ "--i": "1" }}
              href="https://www.ted.com/"
            >
              <TbBrandTed className="round-icon" style={{ color: "#E40027" }} />
            </a>
            <a
              className="round"
              style={{ "--i": "2" }}
              href="https://www.busuu.com/"
            >
              <RiEnglishInput
                className="round-icon"
                style={{ color: "#0160ED" }}
              />
            </a>
            <a
              className="round"
              style={{ "--i": "3" }}
              href="https://monkeytype.com/"
            >
              <GiMonkey className="round-icon" style={{ color: "#E2B714" }} />
            </a>
            <a
              className="round"
              style={{ "--i": "4" }}
              href="https://dictionary.cambridge.org/"
            >
              <TbBooksOff className="round-icon" style={{ color: "#00248B" }} />
            </a>
            <a
              className="round"
              style={{ "--i": "5" }}
              href="https://codepen.io/"
            >
              <FiCodepen className="round-icon" style={{ color: "#0ebeff" }} />
            </a>
            <a
              className="round"
              style={{ "--i": "6" }}
              href="https://www.tiktok.com/"
            >
              <FaTiktok className="round-icon" style={{ color: "#fff" }} />
            </a>
            <a
              className="round"
              style={{ "--i": "7" }}
              href="https://www.amazon.eg/"
            >
              <SiAmazon
                className="icon round-icon"
                style={{ color: "#ff9900" }}
              />
            </a>
            <a
              className="round"
              style={{ "--i": "8" }}
              href="https://playvalorant.com/ar-ae/"
            >
              <SiValorant className="round-icon" style={{ color: "#FF4655" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
