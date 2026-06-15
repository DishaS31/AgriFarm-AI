import heroImage from "../../assets/images/agri-hero.png";

const Home = () => {
return (
<section
  className="relative min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url(${heroImage})`,
    animation: "heroFloat 12s ease-in-out infinite alternate",
  }}
>
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20"></div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto ">
      <div className="flex items-center min-h-screen pt-32">

        <div className="max-w-[720px] flex flex-col">

            <div className="
            inline-flex
            items-center
            gap-3
           
            py-3
            w-54
            rounded-full
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            text-white
           
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
              mt-4
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
            mt-6
            "
            >
            Empowering farmers through AI insights, smart monitoring
            and sustainable farming solutions.
          </p>

          <div className="flex gap-6 mt-8">
            <button
              className=" 
              px-2
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


   {/* Top Right Widget */}
<div className="absolute top-24 right-16 hidden lg:block">
  <div
    className="
    w-56
    p-5
    rounded-3xl
    bg-black/25
    backdrop-blur-xl
    border border-white/10
    "
  >
    <div className="flex items-center justify-between">
      <span className="text-3xl">🌱</span>

      <span className="text-xs text-green-400">
        LIVE
      </span>
    </div>

    <p className="text-white/50 text-xs mt-4">
      Crop Health
    </p>

    <h3 className="text-5xl font-bold text-white mt-1">
      98%
    </h3>

    <div className="mt-4 flex items-end gap-1 h-10">
      <div className="w-2 h-3 rounded-full bg-green-500/40"></div>
      <div className="w-2 h-5 rounded-full bg-green-500/50"></div>
      <div className="w-2 h-6 rounded-full bg-green-500/60"></div>
      <div className="w-2 h-8 rounded-full bg-green-500"></div>
      <div className="w-2 h-10 rounded-full bg-green-500"></div>
    </div>
  </div>
</div>

{/* Bottom Right Widget */}
<div className="absolute bottom-24 right-16 hidden lg:block">
  <div
    className="
    w-60
    p-5
    rounded-3xl
    bg-black/25
    backdrop-blur-xl
    border border-white/10
    "
  >
    <div className="flex items-center gap-3">
      <div
        className="
        h-12
        w-12
        rounded-2xl
        bg-[var(--accent)]/20
        flex
        items-center
        justify-center
        "
      >
        🌾
      </div>

      <div>
        <p className="text-white/50 text-xs">
          Field Status
        </p>

        <h3 className="text-2xl font-semibold text-white">
          Healthy
        </h3>
      </div>
    </div>

    <div className="mt-5">
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-[92%] bg-[var(--accent)]"></div>
      </div>
    </div>

    <div className="flex justify-between mt-4">
      <div>
        <h4 className="text-white text-lg font-bold">
          10K+
        </h4>

        <p className="text-xs text-white/50">
          Farmers
        </p>
      </div>

      <div>
        <h4 className="text-white text-lg font-bold">
          AI
        </h4>

        <p className="text-xs text-white/50">
          Powered
        </p>
      </div>
    </div>
  </div>
</div>
  

  </section>


);
};

export default Home;