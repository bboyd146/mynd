import "./App.css";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import MusicSection from "./components/MusicSection";
import SpotifyLink from "./components/MusicLinks";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import cover from './photos/cover.jpeg';


// make parallax mobile-friendly: reduce/disable movement on small screens, cover photo is a fixed background on small screens
if (typeof document !== "undefined") {
  (function setupMobileCoverStyles() {
    const STYLE_ID = "app-full-cover-mobile-styles";
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      /* disable JS-driven transforms and use fixed background on small screens */
      @media (max-width: 640px) {
        #app-full-cover {
          background-attachment: fixed !important;
          transform: none !important;
          will-change: auto !important;
          pointer-events: none !important;
          background-position: center center !important;
        }
      }

      /* reduce parallax intensity on small/medium screens if JS still applies transforms */
      @media (min-width: 641px) and (max-width: 1024px) {
        #app-full-cover {
          will-change: transform;
        }
      }
    `;
    document.head.appendChild(style);

    // optional: keep a small-screen flag on <html> for other runtime checks
    const mq = window.matchMedia("(max-width: 640px)");
    const onChange = () => {
      if (mq.matches) document.documentElement.classList.add("app-cover-fixed");
      else document.documentElement.classList.remove("app-cover-fixed");
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    onChange();
  })();
}

// create a full-viewport cover element with a subtle parallax/scale on scroll
if (typeof document !== "undefined") {
  try {
    const coverEl = document.createElement("div");
    coverEl.id = "app-full-cover";
    coverEl.style.cssText = [
      "position:fixed",
      "inset:0",
      "height:100vh",
      "width:100%",
      "background-repeat:no-repeat",
      "background-size:cover",
      "background-position:center center",
      `background-image:url(${cover})`,
      "pointer-events:none",
      "will-change:transform",
      "z-index:-1",
      "transform-origin:center",
    ].join(";");

    // put it behind your app content
    document.body.prepend(coverEl);

    let ticking = false;
    const speed = 0.15; // parallax factor (tweak)
    const scaleFactor = 0.0004; // subtle scale on scroll (tweak)

    function onScroll() {
      const y = window.scrollY || window.pageYOffset || 0;
      const translateY = Math.round(y * speed);
      const scale = 1 + y * scaleFactor;
      coverEl.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
    }

    function rafScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
      }
    }

    // initialize position (in case page is loaded scrolled)
    onScroll();

    window.addEventListener("scroll", rafScroll, { passive: true });

    // keep element responsive if cover or window resizes
    const resizeObserver = new ResizeObserver(() => onScroll());
    resizeObserver.observe(document.documentElement);

    // cleanup for HMR / page unload
    const cleanup = () => {
      window.removeEventListener("scroll", rafScroll);
      resizeObserver.disconnect();
      if (coverEl && coverEl.parentNode) coverEl.parentNode.removeChild(coverEl);
    };
    window.addEventListener("beforeunload", cleanup);
    // also expose for runtime cleanup (optional)
    if (import.meta && import.meta.hot && import.meta.hot.dispose) {
      import.meta.hot.dispose(cleanup);
    }
  } catch (e) {
    // fail silently in environments without DOM
    // console.warn("Cover initialization failed", e);
  }
}

function App() {
  return (
    <div className="App">
      <Hero />
<div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <Stats />
        <MusicSection />
        <SpotifyLink />
        <Socials
          handles={{
            instagram: "moremynd",
            tiktok: "moremynd",
          }}
          size={60}
          gap={40}
          direction="row"
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
