const Features = () => {
  const features = [
    {
      icon: "🌾",
      title: "Smart Crop Monitoring",
      desc: "Track crop health in real-time with AI-powered insights and disease detection.",
    },
    {
      icon: "☁️",
      title: "Weather Intelligence",
      desc: "Get accurate weather forecasts and farming recommendations before every season.",
    },
    {
      icon: "📊",
      title: "Yield Analytics",
      desc: "Analyze farm performance and maximize productivity through data-driven decisions.",
    },
    {
      icon: "🚜",
      title: "Precision Farming",
      desc: "Optimize irrigation, fertilizer usage and field operations with smart automation.",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-32">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[var(--accent)] uppercase tracking-[4px] text-sm">
            Why AgriFarm
          </span>

          <h2 className="font-['Sora'] text-5xl font-bold text-white mt-4">
            Smarter Farming
            <span className="text-[var(--accent)]"> Solutions</span>
          </h2>

          <p className="text-white/60 mt-6 text-lg leading-8">
            Empowering farmers with advanced AI tools to improve crop health,
            increase yield and make better farming decisions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((item, index) => (
            <div
              key={index}
              className="
              group
              p-8
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              hover:border-[var(--accent)]
              hover:-translate-y-2
              transition-all
              duration-500
              "
            >
             <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-[var(--accent)]/10
                flex
                items-center
                justify-center
                text-3xl
                animate-[float_3s_ease-in-out_infinite]
                "
                >
                {item.icon}
            </div>

              <h3 className="text-white text-xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="text-white/60 leading-7 mt-4">
                {item.desc}
              </p>

              <div
                className="
                mt-6
                text-[var(--accent)]
                opacity-0
                group-hover:opacity-100
                transition-all
                "
              >
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;