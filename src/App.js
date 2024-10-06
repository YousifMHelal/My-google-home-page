import { BsPaypal } from "react-icons/bs";
import { CgPexels } from "react-icons/cg";
import {
  FaDev,
  FaDribbble,
  FaFacebook,
  FaFire,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaStackOverflow,
  FaTiktok,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { GiMonkey } from "react-icons/gi";
import { IoLogoVercel } from "react-icons/io5";
import { MdDraw } from "react-icons/md";
import {
  SiGmail, SiNextdotjs, SiTailwindcss,
  SiUnsplash,
  SiUpwork,
  SiValorant
} from "react-icons/si";
import { TbBrandTed } from "react-icons/tb";
import busuu from "./busuu.png";
import gpt from "./gpt.svg";
import logo from "./Logo.png";
import profile from "./profile.png";
import shadcn from "./shadcn.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-[#020817] px-4">
      {/* -----Info----- */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={profile}
          alt="Yousif"
          className="rounded-full w-28 border-ring border"
        />
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary text-center">
          Yousif M.Helal
        </h2>
        <div className="flex gap-4 items-center justify-center mt-3 flex-wrap">
          <a href="https://yousifmamdouh.online/" aria-label="Portfolio">
            <img className="icon w-[2rem]" src={logo} alt="Yousif Portfolio" />
          </a>
          <a href="https://www.facebook.com/" aria-label="Facebook">
            <FaFacebook className="icon" style={{ color: "#1877f2" }} />
          </a>
          <a href="https://www.instagram.com/" aria-label="Instagram">
            <FaInstagram className="icon" style={{ color: "#e1306c" }} />
          </a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn">
            <FaLinkedinIn className="icon" style={{ color: "#0a66c2" }} />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            aria-label="Gmail">
            <SiGmail className="icon" style={{ color: "#ea4335" }} />
          </a>
          <a href="https://www.youtube.com/" aria-label="YouTube">
            <FaYoutube className="icon" style={{ color: "#ff0000" }} />
          </a>
          <a href="https://www.twitch.tv/" aria-label="Twitch">
            <FaTwitch className="icon" style={{ color: "#9146ff" }} />
          </a>
          <a href="https://github.com/YousifMHelal" aria-label="GitHub">
            <FaGithub className="icon" style={{ color: "#f5f5f5" }} />
          </a>
          <a href="https://www.upwork.com" aria-label="Upwork">
            <SiUpwork className="icon" style={{ color: "#73bb44" }} />
          </a>
          <a href="https://www.paypal.com/" aria-label="PayPal">
            <BsPaypal className="icon" style={{ color: "#f5f5f5" }} />
          </a>
        </div>
      </div>

      {/* -----Search and Categories----- */}
      <div className="flex flex-col mt-10 w-full items-center">
        <form
          action="https://www.google.com/search"
          method="GET"
          className="w-full max-w-lg">
          <input
            type="text"
            name="q"
            placeholder="Search on Google..."
            className="bg-muted self-center w-full border-border border-2 rounded-3xl px-4 py-2 text-muted-foreground focus:border-none focus:ring-0"
            aria-label="Google Search"
            autoFocus
            autoComplete="off" // Disable autocomplete
          />
        </form>

        {/* -----Categories Section----- */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-8 gap-8">
          <CategorySection title="Coding" iconSet="coding" />
          <CategorySection title="Links" iconSet="links" />
        </div>

        {/* -----Style Section----- */}
        <div className="flex flex-col items-center w-full mt-16">
          <CategorySection title="Style" iconSet="style" />
        </div>
      </div>
    </div>
  );
}

const CategorySection = ({ title, iconSet }) => {
  const icons = {
    coding: [
      {
        icon: <img src={gpt} alt="ChatGPT" />,
        link: "https://chatgpt.com/",
      },
      {
        icon: <img src={shadcn} alt="Shadcn UI" className="w-8 rounded-md" />,
        link: "https://ui.shadcn.com/",
      },
      {
        icon: <FaStackOverflow style={{ color: "#f48024" }} />,
        link: "https://stackoverflow.com/",
      },
      {
        icon: <SiNextdotjs style={{ color: "#ffffff" }} />,
        link: "https://nextjs.org/",
      },
      {
        icon: <IoLogoVercel style={{ color: "#f0f0f0" }} />,
        link: "https://vercel.com/yousif-mamdouhs-projects",
      },
      {
        icon: <FaDev style={{ color: "#ddd" }} />,
        link: "https://dev.to/",
      },
      {
        icon: <MdDraw style={{ color: "#5b57d1" }} />,
        link: "https://excalidraw.com/",
      },
    ],
    style: [
      {
        icon: <SiUnsplash style={{ color: "#ffffff" }} />,
        link: "https://unsplash.com/",
      },
      {
        icon: <CgPexels style={{ color: "#07a081" }} />,
        link: "https://www.pexels.com/",
      },
      {
        icon: <FaFire style={{ color: "#eb0074" }} />,
        link: "https://www.wallpaperflare.com/",
      },
      {
        icon: <FaDribbble style={{ color: "#e60023" }} />,
        link: "https://dribbble.com/",
      },
      {
        icon: <FaPinterestP style={{ color: "#bd081c" }} />,
        link: "https://www.pinterest.com/",
      },
      {
        icon: <SiTailwindcss style={{ color: "#38b2ac" }} />,
        link: "https://tailwindcomponents.com/cheatsheet/",
      },
    ],
    links: [
      {
        icon: <img src={busuu} alt="Busuu" className="w-8" />,
        link: "https://www.busuu.com/dashboard/timeline",
      },
      {
        icon: <FaTiktok style={{ color: "#ffffff" }} />,
        link: "https://www.tiktok.com/",
      },
      {
        icon: <GiMonkey style={{ color: "#e2b714" }} />,
        link: "https://monkeytype.com/",
      },
      {
        icon: <SiValorant style={{ color: "#ff4655" }} />,
        link: "https://playvalorant.com/ar-ae/",
      },
      {
        icon: <TbBrandTed style={{ color: "#e40027" }} />,
        link: "https://www.ted.com/",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xs">
      <h3 className="text-secondary-foreground text-2xl font-semibold text-center mb-5">
        {title}
      </h3>
      <div className="flex gap-4 items-center justify-center flex-wrap">
        {icons[iconSet].map((item, index) => (
          <a href={item.link} key={index} className="icon" aria-label={title}>
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
