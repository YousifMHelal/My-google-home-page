import profile from "./profile.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitch,
  FaGithub,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";

function App() {
  return (
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
        <FaFacebook className="icon" style={{color:'#1877f2'}} />
        <FaInstagram className="icon" style={{color:'#e1306c'}} />
        <FaLinkedinIn className="icon" style={{color:'#0a66c2'}} />
        <FaYoutube className="icon" style={{color:'#ff0000'}} />
        <FaTwitch className="icon" style={{color:'#9146ff'}} />
        <FaGithub className="icon" style={{color:'#f5f5f5'}} />
        <SiUpwork className="icon" style={{color:'#73bb44'}} />
        <BsPaypal className="icon" style={{color:'#003087'}} />
      </div>
      <input className="w-[300px] mt-28" type="search " />
    </div>
  );
}

export default App;
