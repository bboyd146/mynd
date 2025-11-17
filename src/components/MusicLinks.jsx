export default function MusicLinks() {
  return (
    <section className="text-center py-24 px-5 animate-fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto w-full">
        <a
          href="https://open.spotify.com/artist/3p1y42Wk0nqQpMeZkHFLAC"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Stream on Spotify"
          className="flex items-center justify-center gap-3 w-full 
           bg-green-700 text-white rounded-lg py-4 sm:py-5 px-6 sm:px-10 
           text-base sm:text-lg font-bold uppercase 
           tracking-wide transition-transform duration-300 
           hover:scale-[1.03] active:scale-[0.97] hover:bg-green-900"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="flex-shrink-0"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          <span className="truncate">Spotify</span>
        </a>

        <a
          href="https://music.apple.com/us/artist/mynd/383192944"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen on Apple Music"
          className="flex items-center justify-center gap-3 w-full 
           bg-red-400 text-white rounded-lg py-4 sm:py-5 px-6 sm:px-10 
           text-base sm:text-lg font-bold uppercase 
           tracking-wide transition-transform duration-300 
           hover:scale-[1.03] active:scale-[0.97]  hover:bg-red-600"
        >
          <span className="truncate"> Apple Music</span>
        </a>

        <a
          href="https://tidal.com/artist/35776314/u"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen on Tidal"
          className="flex w-full sm:inline-flex items-center justify-center gap-4 bg-gray-800 text-white font-bold uppercase text-base sm:text-xl tracking-[0.05em] px-8 py-4 sm:px-16 sm:py-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="flex-shrink-0"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.5 9.8 12 6.1l7.5 3.7L12 9.5zM2 12l10 5 10-5-10-5-10 5zm0 7l10 5 10-5-10-5-10 5z" />
          </svg>
          <span className="truncate">Tidal</span>
        </a>

        <a
          href="https://music.youtube.com/channel/UCLHI-pIOctHZOdPl0n2uxNQ?si=Y3l2QQnURjTs3Ny4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen on YouTube Music"
          className="flex items-center justify-center gap-3 w-full 
           bg-red-700 text-white rounded-lg py-4 sm:py-5 px-6 sm:px-10 
           text-base sm:text-lg font-bold uppercase 
           tracking-wide transition-transform duration-300 
           hover:scale-[1.03] active:scale-[0.97] hover:bg-red-400"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="flex-shrink-0"
          >
            <path d="M23.498 6.186c-.273-.99-1.08-1.78-2.07-2.052C19.62 3.6 12 3.6 12 3.6s-7.62 0-9.429.534C1.582 4.41.775 5.197.502 6.186.001 8.089 0 12 0 12s0 3.911.502 5.814c.273.99 1.08 1.78 2.069 2.053C4.38 20.4 12 20.4 12 20.4s7.62 0 9.429-.534c.99-.273 1.797-1.06 2.07-2.053C24 15.911 24 12 24 12s0-3.911-.502-5.814zM9.545 15.568v-7.136L15.818 12l-6.273 3.568z" />
          </svg>
          <span className="truncate">YouTube Music</span>
        </a>
      </div>
    </section>
  );
}
