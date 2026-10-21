import { useRef, useState } from "react";
import GlyphRain from "./components/GlyphRain";
import { categories, profile, SEARCH_URL, socials } from "./data/links";
import { useClock } from "./hooks/useClock";
import { useSlashFocus } from "./hooks/useSlashFocus";
import profileImg from "./profile.jpeg";
import { readableOnDark } from "./utils/brandColor";
import { formatDate, formatTime12, greetingFor } from "./utils/time";

const RAIN_PAUSED_KEY = "glyphRainPaused";

// Start page: neon glow + glyph rain backdrop, gradient clock, Google search, brand-coloured link tiles.
function Clock() {
  const now = useClock();
  const { time, period } = formatTime12(now);
  return (
    <>
      <p className="font-['Bricolage_Grotesque'] text-10xl font-semibold leading-none tracking-[-0.04em] tabular-nums sm:text-[7.5rem]">
        <span className="bg-gradient-to-r from-[#22D3EE] to-[#E879F9] bg-clip-text text-transparent">
          {time}
        </span>
        <span className="ml-2 text-4xl tracking-normal text-[#E879F9]">
          {period}
        </span>
      </p>
      <p className="mt-3 text-[#7C8698]">
        {formatDate(now)} · {greetingFor(now.getHours())},{" "}
        {profile.name.split(" ")[0]}
      </p>
    </>
  );
}

function Tile({ link }) {
  return (
    <a
      href={link.href}
      style={{ "--c": readableOnDark(link.color) }}
      className="group/t flex flex-col items-center gap-1.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9]">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#10101A] text-xl text-[var(--c)] ring-1 ring-white/[0.06] transition-all duration-200 group-hover/t:-translate-y-0.5 group-hover/t:bg-[color-mix(in_srgb,var(--c)_16%,#10101A)] group-hover/t:shadow-[0_8px_22px_-8px_var(--c)] motion-reduce:transition-none">
        <link.icon aria-hidden="true" />
      </span>
      <span className="w-full truncate text-center text-[10px] text-[#7C8698] group-hover/t:text-[#E2E8F0]">{link.label}</span>
    </a>
  );
}

function App() {
  const inputRef = useRef(null);
  useSlashFocus(inputRef);
  const [query, setQuery] = useState("");
  const [rainPaused, setRainPaused] = useState(
    () => localStorage.getItem(RAIN_PAUSED_KEY) === "1"
  );

  const toggleRain = () => {
    setRainPaused((prev) => {
      const next = !prev;
      localStorage.setItem(RAIN_PAUSED_KEY, next ? "1" : "0");
      return next;
    });
  };

  return (
    <div className="relative min-h-screen bg-[#050509] bg-[radial-gradient(600px_400px_at_0%_0%,rgba(34,211,238,0.14),transparent_60%),radial-gradient(600px_400px_at_100%_100%,rgba(217,70,239,0.14),transparent_60%)] bg-fixed font-['Figtree'] text-[#E2E8F0] selection:bg-[#E879F9] selection:text-black">
      <GlyphRain boost={query.length > 0} paused={rainPaused} />
      <button
        type="button"
        onClick={toggleRain}
        aria-pressed={rainPaused}
        title={rainPaused ? "Resume background animation" : "Pause background animation"}
        className="fixed bottom-4 left-4 z-10 flex h-7 w-12 items-center rounded-full bg-[#10101A] p-1 ring-1 ring-[rgba(34,211,238,0.12)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9]">
        <span
          className={`h-5 w-5 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#E879F9] shadow-[0_0_8px_rgba(232,121,249,0.5)] transition-transform duration-200 ${
            rainPaused ? "translate-x-0" : "translate-x-5"
          }`}
        />
      </button>
      {/* Content is laid out at 80% scale (the size that reads best at 100% browser zoom); the rain stays full-screen. */}
      <main className="relative mx-auto max-w-[1440px] px-4 py-6 [zoom:0.8] sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="shrink-0 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#E879F9] p-[2px] shadow-[0_0_12px_rgba(34,211,238,0.55),0_0_22px_rgba(232,121,249,0.35)]">
              <img
                src={profileImg}
                alt=""
                className="block h-14 w-14 rounded-full border-2 border-[#050509] object-cover"
              />
            </span>
            <div className="leading-tight">
              <h1 className="pb-0.5 font-['Pacifico'] text-2xl leading-normal [word-spacing:0.3em]">
                <span className="bg-gradient-to-r from-[#22D3EE] to-[#E879F9] bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p className="text-xs text-[#7C8698]">
                {profile.roles.join(" · ")}
              </p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-1">
            {socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  style={{ "--c": readableOnDark(s.color) }}
                  className="grid h-11 w-11 place-items-center rounded-full text-xl text-[#7C8698] outline-none transition-colors hover:bg-[#10101A] hover:text-[var(--c)] focus-visible:ring-2 focus-visible:ring-[#E879F9]">
                  <s.icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </header>

        <section className="relative mt-16 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-10 h-[20rem] bg-[radial-gradient(ellipse_35%_50%_at_50%_45%,rgba(5,5,9,0.9),transparent)]"
          />
          <div className="relative">
            <Clock />
          </div>
          <form
            action={SEARCH_URL}
            method="GET"
            className="relative mx-auto mt-6 max-w-xl">
            <label htmlFor="q" className="sr-only">
              Search Google
            </label>
            <div className="flex items-center gap-3 rounded-full bg-[#0B0B12] px-5 py-3.5 ring-1 ring-[rgba(34,211,238,0.12)] transition-shadow focus-within:ring-2 focus-within:ring-[#E879F9]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 text-[#7C8698]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
              <input
                id="q"
                ref={inputRef}
                name="q"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                autoComplete="off"
                placeholder="Search Google"
                className="w-full bg-transparent text-base placeholder-[#475063] focus:outline-none"
              />
              <kbd className="rounded-md bg-[#161622] px-2 py-0.5 text-xs text-[#7C8698]">
                /
              </kbd>
            </div>
          </form>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="rounded-3xl bg-[#0B0B12] p-4 ring-1 ring-[rgba(34,211,238,0.12)]">
              <h2 className="mb-3 font-['Bricolage_Grotesque'] text-base font-semibold">
                {cat.title}
              </h2>
              <ul className="grid grid-cols-4 gap-x-2 gap-y-3 sm:grid-cols-6">
                {cat.links.map((link) => (
                  <li key={link.href}>
                    <Tile link={link} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
