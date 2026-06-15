const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Punjab, India",
    image: "👨‍🌾",
    review:
      "Using AgriFarm AI increased our crop yield by 32% in a single season. The recommendations were surprisingly accurate.",
  },
  {
    name: "Amit Verma",
    location: "Haryana, India",
    image: "🌾",
    review:
      "Weather forecasting and disease detection helped us reduce losses and improve productivity significantly.",
  },
  {
    name: "Sukhdeep Singh",
    location: "Punjab, India",
    image: "🚜",
    review:
      "The dashboard gives real-time insights that make decision making much easier for our entire farming team.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#080808] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="text-[var(--accent)] uppercase tracking-[4px] text-sm">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            Trusted By Farmers Worldwide
          </h2>

          <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">
            Hear how farmers are improving productivity and
            making smarter decisions with AI.
          </p>

        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
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
              overflow-hidden
              hover:border-[var(--accent)]/30
              transition-all
              duration-500
              "
            >

              {/* Glow */}
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

                {/* Stars */}
                <div className="text-[var(--accent)] text-xl mb-6">
                  ★★★★★
                </div>

                <p className="text-white/70 leading-8 text-lg">
                  "{item.review}"
                </p>

                <div className="mt-8 flex items-center gap-4">

                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[var(--accent)]/10
                    border
                    border-[var(--accent)]/20
                    flex
                    items-center
                    justify-center
                    text-2xl
                    "
                  >
                    {item.image}
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {item.name}
                    </h4>

                    <p className="text-white/50">
                      {item.location}
                    </p>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;