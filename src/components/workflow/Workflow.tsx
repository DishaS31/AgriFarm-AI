const steps = [
  {
    icon: "📡",
    title: "Collect Data",
    desc: "Gather weather, soil moisture and crop health data from smart sensors.",
  },
  {
    icon: "🤖",
    title: "AI Analysis",
    desc: "Advanced machine learning models process millions of data points.",
  },
  {
    icon: "💡",
    title: "Smart Recommendations",
    desc: "Receive irrigation, fertilizer and disease prevention insights.",
  },
  {
    icon: "📈",
    title: "Yield Growth",
    desc: "Increase productivity while reducing operational costs.",
  },
];

const Workflow = () => {
  return (
    <section className="bg-[#080808] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-24">
          <span className="text-[var(--accent)] uppercase tracking-[4px] text-sm">
            How It Works
          </span>

          <h2 className="font-['Sora'] text-5xl font-bold text-white mt-5">
            From Data To Better Harvest
          </h2>

          <p className="text-white/60 mt-6 text-lg max-w-3xl mx-auto">
            Our AI platform continuously collects, analyzes and transforms
            farm data into actionable recommendations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div
            className="
            hidden lg:block
            absolute
            top-[110px]
            left-0
            w-full
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[var(--accent)]/40
            to-transparent
            "
          />

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">

            {steps.map((step, index) => (
              <div
                key={index}
                className="
                group
                relative
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                hover:border-[var(--accent)]/30
                hover:-translate-y-3
                transition-all
                duration-500
                "
              >

                {/* Glow */}
                <div
                  className="
                  absolute
                  inset-0
                  rounded-[32px]
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-[radial-gradient(circle_at_top,var(--accent),transparent_70%)]
                  blur-3xl
                  "
                />

                {/* Step Number */}
                <div
                  className="
                  absolute
                  -top-5
                  left-1/2
                  -translate-x-1/2
                  w-10
                  h-10
                  rounded-full
                  bg-[var(--accent)]
                  text-black
                  font-bold
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  "
                >
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-6 mt-4 relative z-10">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-semibold relative z-10">
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-white/60 mt-4 leading-7 relative z-10">
                  {step.desc}
                </p>

                {/* Connector Dot */}
                {index !== steps.length - 1 && (
                  <div
                    className="
                    hidden lg:block
                    absolute
                    top-[105px]
                    -right-4
                    w-3
                    h-3
                    rounded-full
                    bg-[var(--accent)]
                    shadow-[0_0_20px_rgba(209,168,84,0.8)]
                    "
                  />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Workflow;