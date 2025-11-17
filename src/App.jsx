import "./App.css";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import MusicSection from "./components/MusicSection";
import SpotifyLink from "./components/MusicLinks";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import cover from './photos/cover.jpeg';


import { useEffect } from "react";

// --- MOBILE/RESPONSIVE COVER FIXED + PARALLAX HYBRID ------------------------
function useCoverParallax() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const coverEl = document.createElement("div");
    coverEl.id = "app-full-cover";

    coverEl.style.cssText = `
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100dvh; /* better than 100vh on mobile */
      background-image: url(${cover});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: -1;
      pointer-events: none;
      transform-origin: bottom;
    `;

    document.body.prepend(coverEl);

    const isMobile =
      window.matchMedia("(max-width: 768px)").matches ||
      /iPhone|Android|Mobile|iPad/.test(navigator.userAgent);

    // --- Mobile Mode: Fullscreen static cover -------------------------
    if (isMobile) {
      coverEl.style.transform = "none";
      coverEl.style.willChange = "auto";
      coverEl.style.backgroundAttachment = "scroll"; // stable on iOS

      // prevent cropping on tall mobile screens
      coverEl.style.backgroundSize = "cover";
      coverEl.style.backgroundPosition = "center center";

      // No scroll handlers
      window.addEventListener(
        "scroll",
        () => {
          coverEl.style.transform = "none";
        },
        { passive: true }
      );

      // cleanup for mobile
      return () => {
        coverEl.remove();
        window.removeEventListener("scroll", () => {
          coverEl.style.transform = "none";
        });
      };
    }

    // --- Desktop Mode: Smooth parallax --------------------------------
    let ticking = false;
    const speed = 0.18;
    const scaleFactor = 0.00032;

    function applyParallax() {
      const y = window.scrollY || 0;
      const translateY = Math.round(y * speed);
      const scale = 1 + y * scaleFactor;
      coverEl.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
    }

    function handleScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          applyParallax();
          ticking = false;
        });
      }
    }

    applyParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // ensure proper recalculation on resize
    const ro = new ResizeObserver(applyParallax);
    ro.observe(document.documentElement);

    // cleanup for HMR and unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ro.disconnect();
      coverEl.remove();
    };
  }, []);
}


function App() {
  useCoverParallax();

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
