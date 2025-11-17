export default function MusicSection() {
  const tracks = [
    { type: "Single", title: "Intentional" },
    { type: "Single", title: "Free" },
    { type: "EP", title: "Lavender" },
    { type: "Single", title: "Thankful" },
    { type: "Single", title: "We don't need them." },
  ];

  const spotifyUrl = "https://open.spotify.com/artist/3p1y42Wk0nqQpMeZkHFLAC";
  // const appleUrl = "https://music.apple.com/us/artist/mynd/383192944"
  const tidalLinks = {
    Lavender: "https://tidal.com/album/191324671/u",
    "We don't need them.": "https://tidal.com/track/351813392/u",
    Intentional: "https://tidal.com/track/191324676/u",
    Thankful: "https://tidal.com/track/191324675/u",
    Free: "https://tidal.com/track/191324672/u",
  };

  // const appleLinks = {
  //     "Free": "https://music.apple.com/us/album/free/1577004954?i=1577004955",
  //     "Intentional": "https://music.apple.com/us/album/intentional/1577004954?i=1577004959",
  //     "Thankful": "https://music.apple.com/us/album/thankful/1577004954?i=1577004958",
  //     "We don't need them.": "https://music.apple.com/us/album/we-dont-need-them-single/1735889160"
  // }
  // const lavenderApple = "https://music.apple.com/us/album/lavender-ep/1577004954"

  return (
    <section className="py-20 md:py-32 px-4">
      <h2 className="text-[clamp(1.5rem,6vw,3.5rem)] font-extrabold text-center mb-10 tracking-tight">
        MUSIC
      </h2>

      <section className="mb-16 flex justify-center">
        <div className="w-full max-w-2xl">
<div className="relative w-full pb-[36%] overflow-hidden">
  <iframe
    className="absolute top-0 left-0 w-full h-full "
    src="https://embed.tidal.com/tracks/351813392"
    allow="encrypted-media; fullscreen; clipboard-write"
    sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
    title="TIDAL Embed Player"
  />
</div>

        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {tracks.map((track, index) => {
          const tidalHref = tidalLinks[track.title] || spotifyUrl;
          // const appleHref = appleLinks[track.title] || (track.title === "Lavender" ? lavenderApple : undefined)

          return (
            <article
              key={index}
              className="w-full bg-[#0b0b0b] border border-[#272727] p-5 sm:p-6 rounded-lg transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    {track.type}
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold leading-tight break-words">
                    {track.title}
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto mt-2 md:mt-0 flex-shrink-0">
                  <a
                    href={tidalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-black py-3 px-4 rounded text-sm font-medium transition-colors duration-150 hover:bg-black hover:text-white w-full sm:w-auto"
                    aria-label={`Listen to ${track.title} on Tidal`}
                  >
                    ▶ Listen Now
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
