import { useEffect, useState } from "react";
const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Active Farmers",
    icon: "👨‍🌾",
  },
  {
    value: 98,
    suffix: "%",
    label: "AI Accuracy",
    icon: "🎯",
  },
  {
    value: 35,
    prefix: "+",
    suffix: "%",
    label: "Yield Growth",
    icon: "📈",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Monitoring",
    icon: "🤖",
  },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const interval = 20;

    const timers = stats.map((stat, index) => {
      const step = stat.value / (duration / interval);

      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];

          if (updated[index] < stat.value) {
            updated[index] = Math.min(
              updated[index] + step,
              stat.value
            );
          }

          return updated;
        });
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="bg-[#080808] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="text-[var(--accent)] uppercase tracking-[4px] text-sm">
            Impact Metrics
          </span>

          <h2 className="text-6xl font-bold text-white mt-5">
            Trusted By Modern Farmers
          </h2>

          <p className="text-white/60 mt-6 text-lg max-w-3xl mx-auto">
            Delivering measurable improvements in productivity,
            efficiency and sustainability through intelligent AI.
          </p>

        </div>

        <div className="relative">

          {/* Background Glow */}
          <div
            className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[900px]
            h-[900px]
            rounded-full
            bg-[var(--accent)]/10
            blur-[220px]
            "
          />

          {/* Cards */}
          <div className="relative z-10 grid lg:grid-cols-4 gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                p-8
                hover:-translate-y-3
                hover:border-[var(--accent)]/30
                transition-all
                duration-500
                "
              >

                {/* Hover Glow */}
                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-[radial-gradient(circle_at_top,var(--accent),transparent_70%)]
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[var(--accent)]/10
                    border
                    border-[var(--accent)]/20
                    flex
                    items-center
                    justify-center
                    text-3xl
                    mb-8
                    "
                  >
                    {item.icon}
                  </div>

                  <h3
                    className="
                    text-6xl
                    font-bold
                    text-white
                    leading-none
                    "
                  >
                    {item.prefix || ""}
                    {Math.floor(counts[index]).toLocaleString()}
                    {item.suffix || ""}
                  </h3>

                  <div
                    className="
                    w-14
                    h-1
                    rounded-full
                    bg-[var(--accent)]
                    mt-5
                    mb-5
                    "
                  />

                  <p className="text-white/60 text-lg">
                    {item.label}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;