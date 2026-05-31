import { useEffect, useRef } from "react";
import {
  FaBookReader,
  FaBug,
  FaCode,
  FaDatabase,
  FaDev,
  FaDribbble,
  FaEraser,
  FaFacebook,
  FaGhost,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLayerGroup,
  FaLinkedinIn,
  FaLock,
  FaNetworkWired,
  FaRobot,
  FaShieldAlt,
  FaSkull,
  FaTerminal,
  FaTools,
  FaTwitch,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { GiMonkey } from "react-icons/gi";
import { IoLogoVercel } from "react-icons/io5";
import { MdDraw, MdGTranslate } from "react-icons/md";
import {
  SiDiscord,
  SiDocker,
  SiFigma,
  SiGmail,
  SiGnubash,
  SiGooglebard,
  SiHackerone,
  SiHaveibeenpwned,
  SiKalilinux,
  SiLeetcode,
  SiNextdotjs,
  SiNotion,
  SiOpenai,
  SiPython,
  SiReddit,
  SiSpotify,
  SiStackoverflow,
  SiTailwindcss,
  SiTorbrowser,
  SiTryhackme,
  SiUpwork,
  SiValorant,
  SiVirustotal,
  SiWireshark,
  SiX,
} from "react-icons/si";
import { TbBrandTed } from "react-icons/tb";

// Keep profile image, removed failing local imports
import profile from "./profile.jpeg";

function App() {
  const searchInputRef = useRef(null);

  // Keyboard shortcut to focus search bar
  useEffect(() => {
    const handleKeyDown = (e) => {
      // If user presses "/" and the active element is NOT an input or textarea
      if (
        e.key === "/" &&
        document.activeElement.tagName !== "INPUT" &&
        document.activeElement.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#050509] text-slate-300 font-mono relative overflow-hidden selection:bg-fuchsia-500 selection:text-white">
      {/* Cyberpunk Grid Background */}
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Glowing Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[150px] pointer-events-none"></div>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center relative z-10">
        {/* Terminal Header */}
        <div className="w-full max-w-4xl flex justify-between items-center border-b border-slate-800 pb-2 mb-8 text-xs sm:text-sm">
          <span className="text-cyan-400">
            root@yousif-sys<span className="text-fuchsia-500">:~#</span>{" "}
            ./start_dashboard.sh
          </span>
          <span className="text-emerald-400 animate-pulse">
            [SYSTEM ONLINE]
          </span>
        </div>

        {/* Dossier / Profile Section */}
        <section className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 animate-fade-in">
          <div className="relative group p-1 bg-[#09090b] shadow-[0_0_25px_rgba(192,38,211,0.3)] rounded-lg transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]">
            {/* Neon Borders */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-fuchsia-500 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-400 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-rose-500 rounded-br-lg"></div>

            <img
              src={profile}
              alt="Yousif"
              className="w-32 h-32 object-cover rounded-md grayscale group-hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150";
              }} // Fallback if local image missing
            />
          </div>

          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 mb-2 drop-shadow-[0_0_10px_rgba(192,38,211,0.5)]">
              YOUSIF M.HELAL
            </h1>
            <p className="text-slate-400 text-sm mb-6 uppercase tracking-widest">
              &gt; <span className="text-cyan-400">Full_Stack_Developer</span>{" "}
              //{" "}
              <span className="text-rose-500">Cyber_Security_Enthusiast</span>
            </p>

            {/* Top Quick Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <TopLink
                href="https://www.yousifmamdouh.tech/"
                icon={<FaCode />}
                hoverColor="hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              />
              <TopLink
                href="https://www.facebook.com/"
                icon={<FaFacebook />}
                hoverColor="hover:text-blue-600 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]"
              />
              <TopLink
                href="https://www.instagram.com/"
                icon={<FaInstagram />}
                hoverColor="hover:text-pink-500 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
              />
              <TopLink
                href="https://github.com/YousifMHelal"
                icon={<FaGithub />}
                hoverColor="hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              />
              <TopLink
                href="https://www.linkedin.com/"
                icon={<FaLinkedinIn />}
                hoverColor="hover:text-blue-500 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              />
              <TopLink
                href="https://www.youtube.com/"
                icon={<FaYoutube />}
                hoverColor="hover:text-red-600 hover:border-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]"
              />
              <TopLink
                href="https://www.twitch.tv/"
                icon={<FaTwitch />}
                hoverColor="hover:text-purple-500 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />
              <TopLink
                href="https://discord.com/app"
                icon={<SiDiscord />}
                hoverColor="hover:text-indigo-400 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(129,140,248,0.5)]"
              />
              <TopLink
                href="https://web.whatsapp.com/"
                icon={<FaWhatsapp />}
                hoverColor="hover:text-green-500 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]"
              />
              <TopLink
                href="https://twitter.com/"
                icon={<SiX />}
                hoverColor="hover:text-slate-300 hover:border-slate-300 hover:shadow-[0_0_15px_rgba(203,213,225,0.5)]"
              />
              <TopLink
                href="https://mail.google.com/mail/u/0/#inbox"
                icon={<SiGmail />}
                hoverColor="hover:text-red-500 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
              />
              <TopLink
                href="https://www.upwork.com/"
                icon={<SiUpwork />}
                hoverColor="hover:text-emerald-500 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]"
              />
            </div>
          </div>
        </section>

        {/* Command Line Search */}
        <section className="w-full max-w-4xl mb-16 relative">
          <div className="absolute -top-3 right-4 bg-[#050509] px-2 text-[10px] text-slate-500 border border-slate-800 rounded z-10">
            Press <kbd className="text-fuchsia-400 font-bold">/</kbd> to search
          </div>
          <div className="bg-[#09090b]/80 backdrop-blur-md border border-slate-800 rounded-lg p-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] focus-within:shadow-[0_0_30px_rgba(192,38,211,0.2)] focus-within:border-fuchsia-500/50 transition-all duration-300 relative overflow-hidden group">
            {/* Search Bar Glow Effect */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500"></div>

            <form
              action="https://www.google.com/search"
              method="GET"
              className="flex items-center gap-3">
              <span className="text-fuchsia-500 font-bold hidden sm:inline">
                yousif@sys:~$
              </span>
              <span className="text-fuchsia-500 font-bold sm:hidden">~$</span>
              <input
                ref={searchInputRef}
                type="text"
                name="q"
                placeholder="execute query..."
                className="w-full bg-transparent border-none text-slate-200 placeholder-slate-600 focus:outline-none text-lg"
                autoFocus
                autoComplete="off"
              />
              <span className="animate-pulse w-2 h-5 bg-cyan-400 inline-block"></span>
            </form>
          </div>
        </section>

        {/* Main Database Grid */}
        <section className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CategorySection
            title="0x01_DEVELOPMENT"
            iconSet="coding"
            theme="cyan"
          />
          <CategorySection
            title="0x02_OFFENSIVE_SEC"
            iconSet="security"
            theme="rose"
          />
          <CategorySection
            title="0x03_OSINT_&_TOOLS"
            iconSet="osint"
            theme="purple"
          />
          <CategorySection
            title="0x04_PERSONAL_SYS"
            iconSet="personal"
            theme="emerald"
          />
        </section>
      </main>
    </div>
  );
}

/* Sub-Components */

const TopLink = ({ href, icon, hoverColor }) => (
  <a
    href={href}
    rel="noreferrer"
    className={`flex items-center justify-center w-11 h-11 bg-[#0a0a0f] border border-slate-800 text-slate-400 rounded-lg transition-all duration-300 hover:-translate-y-1 ${hoverColor}`}>
    <div className="text-xl">{icon}</div>
  </a>
);

const CategorySection = ({ title, iconSet, theme }) => {
  // Map themes to neon colors
  const themes = {
    cyan: {
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      hoverBorder: "hover:border-cyan-400",
      glow: "hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]",
      iconHover:
        "group-hover/icon:text-cyan-400 group-hover/icon:border-cyan-400 group-hover/icon:bg-cyan-400/10",
      corner: "border-cyan-500",
    },
    rose: {
      text: "text-rose-500",
      border: "border-rose-500/30",
      hoverBorder: "hover:border-rose-400",
      glow: "hover:shadow-[0_0_25px_rgba(244,63,94,0.15)]",
      iconHover:
        "group-hover/icon:text-rose-400 group-hover/icon:border-rose-400 group-hover/icon:bg-rose-400/10",
      corner: "border-rose-500",
    },
    purple: {
      text: "text-purple-400",
      border: "border-purple-500/30",
      hoverBorder: "hover:border-purple-400",
      glow: "hover:shadow-[0_0_25px_rgba(192,38,211,0.15)]",
      iconHover:
        "group-hover/icon:text-purple-400 group-hover/icon:border-purple-400 group-hover/icon:bg-purple-400/10",
      corner: "border-purple-500",
    },
    emerald: {
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      hoverBorder: "hover:border-emerald-400",
      glow: "hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]",
      iconHover:
        "group-hover/icon:text-emerald-400 group-hover/icon:border-emerald-400 group-hover/icon:bg-emerald-400/10",
      corner: "border-emerald-500",
    },
  };

  const t = themes[theme];

  const icons = {
    coding: [
      { icon: <SiOpenai />, link: "https://chatgpt.com/", label: "ChatGPT" },
      { icon: <FaRobot />, link: "https://claude.ai/", label: "Claude_AI" },
      {
        icon: <SiGooglebard />,
        link: "https://gemini.google.com/",
        label: "Gemini",
      },
      { icon: <SiNextdotjs />, link: "https://nextjs.org/", label: "Next.js" },
      {
        icon: <FaLayerGroup />,
        link: "https://ui.shadcn.com/",
        label: "shadcn/ui",
      },
      { icon: <IoLogoVercel />, link: "https://vercel.com/", label: "Vercel" },
      {
        icon: <SiTailwindcss />,
        link: "https://tailwindcss.com/docs",
        label: "Tailwind",
      },
      { icon: <SiDocker />, link: "https://www.docker.com/", label: "Docker" },
      { icon: <SiPython />, link: "https://www.python.org/", label: "Python" },
      {
        icon: <SiStackoverflow />,
        link: "https://stackoverflow.com/",
        label: "Stack_Overflow",
      },
      { icon: <FaDev />, link: "https://dev.to/", label: "DEV_Community" },
      {
        icon: <SiLeetcode />,
        link: "https://leetcode.com/",
        label: "LeetCode",
      },
    ],
    security: [
      {
        icon: <SiKalilinux />,
        link: "https://www.kali.org/docs/",
        label: "Kali_Docs",
      },
      {
        icon: <SiTryhackme />,
        link: "https://tryhackme.com/",
        label: "TryHackMe",
      },
      {
        icon: <FaShieldAlt />,
        link: "https://www.hackthebox.com/",
        label: "HackTheBox",
      },
      {
        icon: <FaLock />,
        link: "https://portswigger.net/web-security",
        label: "PortSwigger",
      },
      {
        icon: <FaBug />,
        link: "https://owasp.org/www-project-top-ten/",
        label: "OWASP_Top_10",
      },
      {
        icon: <FaSkull />,
        link: "https://www.hackthissite.org/",
        label: "HackThisSite",
      },
      { icon: <FaTerminal />, link: "https://ctftime.org/", label: "CTFtime" },
      {
        icon: <FaDatabase />,
        link: "https://www.cvedetails.com/",
        label: "CVE_Details",
      },
      {
        icon: <FaCode />,
        link: "https://www.exploit-db.com/",
        label: "Exploit_DB",
      },
      {
        icon: <SiHackerone />,
        link: "https://hackerone.com/hacktivity",
        label: "HackerOne",
      },
      {
        icon: <FaGlobe />,
        link: "https://nvd.nist.gov/",
        label: "NVD_Registry",
      },
      {
        icon: <SiGnubash />,
        link: "https://gtfobins.github.io/",
        label: "GTFOBins",
      },
    ],
    osint: [
      {
        icon: <FaNetworkWired />,
        link: "https://www.shodan.io/",
        label: "Shodan",
      },
      {
        icon: <FaTools />,
        link: "https://gchq.github.io/CyberChef/",
        label: "CyberChef",
      },
      {
        icon: <SiVirustotal />,
        link: "https://www.virustotal.com/",
        label: "VirusTotal",
      },
      {
        icon: <SiHaveibeenpwned />,
        link: "https://haveibeenpwned.com/",
        label: "Pwned_Check",
      },
      {
        icon: <FaGhost />,
        link: "https://osintframework.com/",
        label: "OSINT_Frame",
      },
      {
        icon: <SiWireshark />,
        link: "https://www.wireshark.org/docs/",
        label: "Wireshark",
      },
      {
        icon: <SiTorbrowser />,
        link: "https://www.torproject.org/",
        label: "Tor_Network",
      },
      { icon: <FaCode />, link: "https://regex101.com/", label: "Regex101" },
      {
        icon: <MdDraw />,
        link: "https://excalidraw.com/",
        label: "Excalidraw",
      },
      { icon: <FaEraser />, link: "https://eraser.io/", label: "Eraser.io" },
    ],
    personal: [
      {
        icon: <SiReddit />,
        link: "https://www.reddit.com/r/netsec/",
        label: "r/netsec",
      },
      {
        icon: <SiSpotify />,
        link: "https://open.spotify.com/",
        label: "Spotify",
      },
      {
        icon: <FaBookReader />,
        link: "https://www.busuu.com/dashboard/timeline",
        label: "Busuu",
      },
      {
        icon: <GiMonkey />,
        link: "https://monkeytype.com/",
        label: "Monkeytype",
      },
      {
        icon: <SiValorant />,
        link: "https://playvalorant.com/",
        label: "Valorant",
      },
      {
        icon: <TbBrandTed />,
        link: "https://www.ted.com/",
        label: "TED_Talks",
      },
      {
        icon: <SiNotion />,
        link: "https://www.notion.so/",
        label: "Notion_Base",
      },
      {
        icon: <MdGTranslate />,
        link: "https://translate.google.com/",
        label: "G_Translate",
      },
      { icon: <SiFigma />, link: "https://www.figma.com/", label: "Figma" },
      {
        icon: <FaDribbble />,
        link: "https://dribbble.com/",
        label: "Dribbble",
      },
    ],
  };

  return (
    <div
      className={`bg-[#09090c] border ${t.border} ${t.hoverBorder} ${t.glow} p-6 rounded-lg transition-all duration-300 relative group`}>
      {/* Decorative Corner Brackets */}
      <div
        className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${t.corner} rounded-tl opacity-50 group-hover:opacity-100 transition-opacity`}></div>
      <div
        className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${t.corner} rounded-tr opacity-50 group-hover:opacity-100 transition-opacity`}></div>
      <div
        className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${t.corner} rounded-bl opacity-50 group-hover:opacity-100 transition-opacity`}></div>
      <div
        className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${t.corner} rounded-br opacity-50 group-hover:opacity-100 transition-opacity`}></div>

      <div
        className={`flex items-center gap-3 mb-6 border-b border-slate-800/50 pb-2`}>
        <h3
          className={`text-lg font-bold ${t.text} tracking-wider uppercase drop-shadow-md`}>
          // {title}
        </h3>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-6 gap-x-2">
        {icons[iconSet].map((item, index) => (
          <a
            href={item.link}
            key={index}
            rel="noreferrer"
            className="flex flex-col items-center gap-2 group/icon outline-none"
            aria-label={item.label}>
            <div
              className={`w-12 h-12 rounded-md flex items-center justify-center text-2xl text-slate-500 bg-[#0c0c12] border border-slate-800 transition-all duration-300 ${t.iconHover}`}>
              {item.icon}
            </div>
            <span
              className={`text-[10px] font-medium text-slate-500 ${t.text.replace("text-", "group-hover/icon:text-")} text-center truncate w-full px-1 transition-colors duration-300`}>
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
