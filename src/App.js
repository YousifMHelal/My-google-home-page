import { CgPexels } from "react-icons/cg";
import { BsPaypal } from "react-icons/bs";
import {
  FaBug,
  FaCode,
  FaDev,
  FaDribbble,
  FaFacebook,
  FaGlobe,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaLock,
  FaRobot,
  FaPenNib,
  FaPinterestP,
  FaShieldAlt,
  FaTiktok,
  FaTerminal,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { GiMonkey } from "react-icons/gi";
import { IoLogoVercel } from "react-icons/io5";
import { MdDraw, MdGTranslate } from "react-icons/md";
import { TbBrandTed } from "react-icons/tb";
import {
  SiGmail,
  SiHackerone,
  SiLeetcode,
  SiNotion,
  SiGooglebard,
  SiNextdotjs,
  SiCanva,
  SiTailwindcss,
  SiUnsplash,
  SiTryhackme,
  SiUpwork,
  SiValorant,
} from "react-icons/si";
import busuu from "./busuu.png";
import gpt from "./gpt.svg";
import profile from "./profile.jpeg";
import shadcn from "./shadcn.png";

function App() {
  return (
    <>
      <div className="bg-orb bg-orb-left" />
      <div className="bg-orb bg-orb-right" />
      <main className="app-shell">
        <section className="profile-wrap">
          <img src={profile} alt="Yousif" className="profile-image" />
          <h1 className="profile-title">Yousif M.Helal</h1>
          <div className="top-links">
            <a
              href="https://www.yousifmamdouh.tech/"
              aria-label="Portfolio"
              rel="noreferrer">
              <FaCode className="icon top-icon" style={{ color: "#00a7ff" }} />
            </a>
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              rel="noreferrer">
              <FaFacebook
                className="icon top-icon"
                style={{ color: "#1877f2" }}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              rel="noreferrer">
              <FaInstagram
                className="icon top-icon"
                style={{ color: "#e1306c" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              rel="noreferrer">
              <FaLinkedinIn
                className="icon top-icon"
                style={{ color: "#0a66c2" }}
              />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              aria-label="Gmail"
              rel="noreferrer">
              <SiGmail className="icon top-icon" style={{ color: "#ea4335" }} />
            </a>
            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              rel="noreferrer">
              <FaYoutube
                className="icon top-icon"
                style={{ color: "#ff0000" }}
              />
            </a>
            <a
              href="https://www.twitch.tv/"
              aria-label="Twitch"
              rel="noreferrer">
              <FaTwitch
                className="icon top-icon"
                style={{ color: "#9146ff" }}
              />
            </a>
            <a
              href="https://github.com/YousifMHelal"
              aria-label="GitHub"
              rel="noreferrer">
              <FaGithub
                className="icon top-icon"
                style={{ color: "#f5f5f5" }}
              />
            </a>
            <a
              href="https://www.upwork.com/"
              aria-label="Upwork"
              rel="noreferrer">
              <SiUpwork
                className="icon top-icon"
                style={{ color: "#73bb44" }}
              />
            </a>
            <a
              href="https://www.paypal.com/"
              aria-label="PayPal"
              rel="noreferrer">
              <BsPaypal
                className="icon top-icon"
                style={{ color: "#f5f5f5" }}
              />
            </a>
          </div>
        </section>

        <section className="search-wrap">
          <form
            action="https://www.google.com/search"
            method="GET"
            className="search-form">
            <input
              type="text"
              name="q"
              placeholder="Search on Google..."
              className="search-input"
              aria-label="Google Search"
              autoFocus
              autoComplete="off"
            />
          </form>
          <p className="search-subtitle">
            Fast access to your daily tools, learning, and security links.
          </p>
        </section>

        <section className="categories-grid">
          <div className="category-card">
            <CategorySection title="Coding" iconSet="coding" />
          </div>
          <div className="category-card">
            <CategorySection title="Security" iconSet="security" />
          </div>
          <div className="category-card">
            <CategorySection title="Personal" iconSet="personal" />
          </div>
          <div className="category-card">
            <CategorySection title="Style" iconSet="style" />
          </div>
        </section>
      </main>
    </>
  );
}

const CategorySection = ({ title, iconSet }) => {
  const icons = {
    coding: [
      {
        icon: <img src={gpt} alt="ChatGPT" />,
        link: "https://chatgpt.com/",
        label: "ChatGPT",
      },
      {
        icon: <img src={shadcn} alt="Shadcn UI" className="w-8 rounded-md" />,
        link: "https://ui.shadcn.com/",
        label: "shadcn/ui",
      },
      {
        icon: <SiNextdotjs style={{ color: "#ffffff" }} />,
        link: "https://nextjs.org/",
        label: "Next.js",
      },
      {
        icon: <IoLogoVercel style={{ color: "#f0f0f0" }} />,
        link: "https://vercel.com/yousif-mamdouhs-projects",
        label: "Vercel",
      },
      {
        icon: <FaDev style={{ color: "#ddd" }} />,
        link: "https://dev.to/",
        label: "DEV",
      },
      {
        icon: <MdDraw style={{ color: "#5b57d1" }} />,
        link: "https://excalidraw.com/",
        label: "Excalidraw",
      },
      {
        icon: <SiTailwindcss style={{ color: "#00d4ff" }} />,
        link: "https://tailwindcss.com/docs",
        label: "Tailwind Docs",
      },
      {
        icon: <FaRobot style={{ color: "#00d4ff" }} />,
        link: "https://claude.ai/",
        label: "Claude Code",
      },
      {
        icon: <SiGooglebard style={{ color: "#ffffff" }} />,
        link: "https://gemini.google.com/",
        label: "Gemini",
      },
      {
        icon: <SiLeetcode style={{ color: "#ffa116" }} />,
        link: "https://leetcode.com/",
        label: "LeetCode",
      },
    ],
    security: [
      {
        icon: <SiTryhackme style={{ color: "#ff4c4c" }} />,
        link: "https://tryhackme.com/",
        label: "TryHackMe",
      },
      {
        icon: <FaShieldAlt style={{ color: "#00d4ff" }} />,
        link: "https://www.hackthebox.com/",
        label: "Hack The Box",
      },
      {
        icon: <FaLock style={{ color: "#ff8c42" }} />,
        link: "https://portswigger.net/web-security",
        label: "PortSwigger Academy",
      },
      {
        icon: <FaBug style={{ color: "#9fd87d" }} />,
        link: "https://owasp.org/www-project-top-ten/",
        label: "OWASP Top 10",
      },
      {
        icon: <FaTerminal style={{ color: "#76c6ff" }} />,
        link: "https://ctftime.org/",
        label: "CTFtime",
      },
      {
        icon: <FaGlobe style={{ color: "#b7c7ff" }} />,
        link: "https://nvd.nist.gov/",
        label: "NVD",
      },
      {
        icon: <SiHackerone style={{ color: "#ffffff" }} />,
        link: "https://hackerone.com/hacktivity",
        label: "HackerOne Hacktivity",
      },
      {
        icon: <FaBug style={{ color: "#c7ff93" }} />,
        link: "https://www.cvedetails.com/",
        label: "CVE Details",
      },
      {
        icon: <FaTerminal style={{ color: "#9ddcff" }} />,
        link: "https://www.exploit-db.com/",
        label: "Exploit DB",
      },
    ],
    personal: [
      {
        icon: <img src={busuu} alt="Busuu" className="w-8" />,
        link: "https://www.busuu.com/dashboard/timeline",
        label: "Busuu",
      },
      {
        icon: <FaTiktok style={{ color: "#ffffff" }} />,
        link: "https://www.tiktok.com/",
        label: "TikTok",
      },
      {
        icon: <GiMonkey style={{ color: "#e2b714" }} />,
        link: "https://monkeytype.com/",
        label: "Monkeytype",
      },
      {
        icon: <SiValorant style={{ color: "#ff4655" }} />,
        link: "https://playvalorant.com/ar-ae/",
        label: "Valorant",
      },
      {
        icon: <TbBrandTed style={{ color: "#e40027" }} />,
        link: "https://www.ted.com/",
        label: "TED",
      },
      {
        icon: <FaPinterestP style={{ color: "#bd081c" }} />,
        link: "https://www.pinterest.com/",
        label: "Pinterest",
      },
      {
        icon: <SiNotion style={{ color: "#ffffff" }} />,
        link: "https://www.notion.so/",
        label: "Notion",
      },
      {
        icon: <MdGTranslate style={{ color: "#8ab4f8" }} />,
        link: "https://translate.google.com/",
        label: "Google Translate",
      },
    ],
    style: [
      {
        icon: <SiUnsplash style={{ color: "#ffffff" }} />,
        link: "https://unsplash.com/",
        label: "Unsplash",
      },
      {
        icon: <CgPexels style={{ color: "#07a081" }} />,
        link: "https://www.pexels.com/",
        label: "Pexels",
      },
      {
        icon: <FaPenNib style={{ color: "#eb0074" }} />,
        link: "https://www.wallpaperflare.com/",
        label: "Wallpaper",
      },
      {
        icon: <FaDribbble style={{ color: "#e60023" }} />,
        link: "https://dribbble.com/",
        label: "Dribbble",
      },
      {
        icon: <SiCanva style={{ color: "#00c4cc" }} />,
        link: "https://www.canva.com/",
        label: "Canva",
      },
      {
        icon: <SiTailwindcss style={{ color: "#38b2ac" }} />,
        link: "https://tailwindcomponents.com/cheatsheet/",
        label: "Tailwind Cheatsheet",
      },
    ],
  };

  return (
    <div className="category-section">
      <h3 className="category-title">{title}</h3>
      <div className="icon-grid">
        {icons[iconSet].map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="icon"
            aria-label={item.label || title}
            title={item.label || title}
            rel="noreferrer">
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
