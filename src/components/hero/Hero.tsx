import heroImage from "../../assets/images/agri-hero.png";

const Home = () => {
return (
  <section
    className="relative min-h-screen bg-cover bg-center"
  style={{
  backgroundImage: `url(${heroImage})`,
}}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20"></div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-8">
      <div className="flex items-center min-h-screen pt-32">

        <div className="max-w-[720px] flex flex-col">

            <div className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-full
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            text-white
            w-fit
            ">
              🌾 AI Powered Agriculture
            </div>

              <h1
              className="
              font-['Sora']
              text-7xl
              lg:text-[92px]
              font-bold
              leading-[1.05]
              max-w-[700px]
              mt-12
              "
              >
              Future Of
            <br />
            <span className="text-[var(--accent)]">
              Smart Agriculture
            </span>
          </h1>

            <p
            className="
            text-white/70
            text-xl
            leading-9
            max-w-[620px]
            mt-8
            "
            >
            Empowering farmers through AI insights, smart monitoring
            and sustainable farming solutions.
          </p>

          <div className="flex gap-6 mt-12">
            <button
              className=" 
              px-8
              h-12
              w-48
              rounded-full
              bg-[var(--accent)]
              text-black
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              "
            >
              Explore Technology →
            </button>

            <button
              className="
              px-8
              h-12
              w-48
              rounded-full
              border
              border-white/20
              text-white
              backdrop-blur-md
              hover:bg-white/10
              transition-all
              duration-300
              "
            >
              View Dashboard
            </button>
          </div>
        </div>

      </div>
    </div>

    {/* Floating Card */}
    <div className="absolute right-24 top-1/2 -translate-y-1/2 hidden lg:block">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-72">

        <div className="text-7xl mb-5">
          🌾
        </div>

        <h3 className="text-white text-3xl font-bold">
          The Future
          <br />
          Begins In
          <br />
          The Field
        </h3>

      </div>
    </div>

    {/* Bottom Stats */}
    <div className="absolute bottom-10 right-24 hidden lg:flex gap-10 text-white">

      <div>
        <h3 className="text-3xl font-bold">
          10K+
        </h3>
        <p>Farmers</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">
          98%
        </h3>
        <p>Accuracy</p>
      </div>

    </div>

  </section>
);
};

export default Home;