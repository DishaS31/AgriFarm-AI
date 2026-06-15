const technologies = [
  {
    icon: "🌦️",
    title: "Weather Intelligence",
    desc: "Real-time weather forecasting and rainfall prediction powered by AI.",
  },
  {
    icon: "🛰️",
    title: "Satellite Monitoring",
    desc: "Track crop conditions and field activity using satellite imagery.",
  },
  {
    icon: "🤖",
    title: "AI Prediction Engine",
    desc: "Machine learning models analyze millions of agricultural data points.",
  },
  {
    icon: "📊",
    title: "Yield Analytics",
    desc: "Monitor farm performance and maximize productivity.",
  },
];

const TechnologyShowcase = () => {
  return (
    <section className="bg-[#080808] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">
          <span className="text-[var(--accent)] uppercase tracking-[4px] text-sm">
            Technology
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            Built With Advanced AI Technology
          </h2>

          <p className="text-white/60 text-lg mt-6 max-w-3xl mx-auto">
            Combining artificial intelligence, satellite data and
            predictive analytics to help farmers make better decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {technologies.map((item, index) => (
            <div
              key={index}
              className="
              group
              rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              hover:border-[var(--accent)]/30
              transition-all duration-500
              "
            >
              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-white text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-white/60 text-lg leading-8">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;