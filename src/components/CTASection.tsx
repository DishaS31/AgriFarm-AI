const CTASection = () => {
  return (
    <section className="bg-[#080808] py-32">
      <div className="max-w-6xl mx-auto px-8">

        <div
          className="
          relative
          rounded-[40px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-16
          overflow-hidden
          text-center
          "
        >

          <div
            className="
            absolute
            w-[700px]
            h-[700px]
            rounded-full
            bg-[var(--accent)]/10
            blur-[180px]
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            "
          />

          <div className="relative z-10">

            <h2 className="text-6xl font-bold text-white leading-tight">
              Ready To Transform
              <span className="text-[var(--accent)]">
                {" "}Your Farm?
              </span>
            </h2>

            <p className="text-white/60 text-xl mt-8 max-w-3xl mx-auto">
              Start using AI-powered agriculture solutions and
              unlock smarter farming decisions today.
            </p>

            <div className="flex justify-center gap-5 mt-10 flex-wrap">

              <button
                className="
                px-8 py-4
                rounded-full
                bg-[var(--accent)]
                text-black
                font-semibold
                "
              >
                Get Started
              </button>

              <button
                className="
                px-8 py-4
                rounded-full
                border border-white/10
                text-white
                "
              >
                Contact Us
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;