export default function Stats() {
  const stats = [
    { number: "1K+", label: "Monthly Listeners" },
    { number: "63", label: "Followers" }
  ]

  return (
    <div className="flex justify-center gap-10 md:gap-20 py-16 px-4 flex-wrap animate-fadeIn">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <span className="text-6xl font-black block mb-4">
            {stat.number}
          </span>
          <span className="text-base opacity-60 uppercase tracking-[0.2em]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}