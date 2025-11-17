import mynd from "../photos/Mynd.jpeg";

export default function Hero() {
  return (
    <section
      role="region"
      aria-label="Hero"
      className="relative flex min-h-[70vh] sm:min-h-screen flex-col items-center justify-center 
                 overflow-hidden px-4 sm:px-6 lg:px-8 animate-fadeIn"
      style={{
        backgroundImage: `url(${mynd})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-10/12 sm:w-4/5 md:w-3/5 h-2/3 sm:h-4/5 
                        rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)]
                        animate-pulseGlow"
        ></div>
      </div>

      <h1
        className="relative z-10 font-black uppercase tracking-tight leading-none text-center
                     text-[clamp(3.2rem,18vw,12rem)] sm:text-[clamp(6rem,18vw,18rem)]
                     animate-pulse"
      >
        MYND
      </h1>

      <p
        className="relative z-10 mt-2 sm:mt-6 text-[clamp(0.9rem,3vw,1.8rem)] font-light uppercase 
                    tracking-[0.3em] opacity-90 text-center"
      >
        Indie R&amp;B
      </p>

      <div
        className="relative z-10 absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 
                      text-2xl opacity-70 animate-bounce"
      >
        ↓
      </div>
    </section>
  );
}
