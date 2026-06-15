const DashboardPreview = () => {
  return (
    <section className="bg-[#080808] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}
          <div>
            <span className="text-[var(--accent)] uppercase tracking-[4px] text-sm">
              AI Dashboard
            </span>

            <h2 className="font-['Sora'] text-5xl lg:text-6xl font-bold text-white mt-5 leading-tight">
              Everything You Need
              <br />
              To Manage Your Farm
            </h2>

            <p className="text-white/60 text-lg leading-8 mt-6 max-w-xl">
              Monitor crop health, weather conditions,
              yield performance and field analytics
              from a single intelligent dashboard.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
                  ✓
                </div>
                <p className="text-white">
                  Real-time crop monitoring
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
                  ✓
                </div>
                <p className="text-white">
                  AI-powered predictions
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
                  ✓
                </div>
                <p className="text-white">
                  Weather & yield analytics
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* FLOATING CARD */}
            <div
              className="
              absolute
              -top-8
              -right-8
              z-20
              bg-black/80
              border
              border-[var(--accent)]/20
              rounded-3xl
              px-6
              py-5
              backdrop-blur-xl
              animate-[float_5s_ease-in-out_infinite]
              "
            >
              <p className="text-white/50 text-xs uppercase tracking-widest">
                Yield Growth
              </p>

              <h3 className="text-[var(--accent)] text-4xl font-bold mt-1">
                +35%
              </h3>
            </div>

            {/* DASHBOARD */}
            <div
              className="
              relative
              rounded-[36px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-6
              shadow-[0_30px_120px_rgba(212,175,55,0.12)]
              "
            >

              <div className="grid grid-cols-2 gap-4">

                {/* CARD 1 */}
                <div className="rounded-3xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 p-5">

                  <p className="text-white/60 text-sm">
                    Crop Health
                  </p>

                  <div className="flex items-end justify-between mt-3">
                    <h3 className="text-5xl font-bold text-[var(--accent)]">
                      98%
                    </h3>

                    <span className="text-emerald-400 text-sm">
                      ↑ 12%
                    </span>
                  </div>

                  <div className="flex items-end gap-2 h-16 mt-5">

                    <div className="w-2 h-8 rounded-full bg-[var(--accent)]" />
                    <div className="w-2 h-10 rounded-full bg-[var(--accent)]" />
                    <div className="w-2 h-6 rounded-full bg-[var(--accent)]" />
                    <div className="w-2 h-12 rounded-full bg-[var(--accent)]" />
                    <div className="w-2 h-14 rounded-full bg-[var(--accent)]" />
                    <div className="w-2 h-16 rounded-full bg-[var(--accent)]" />

                  </div>

                </div>

                {/* CARD 2 */}
                <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-5">

                  <div className="flex items-center justify-between">

                    <p className="text-white/60 text-sm">
                      Weather
                    </p>

                    <span className="text-3xl">
                      ☀️
                    </span>

                  </div>

                  <h3 className="text-white text-5xl font-bold mt-4">
                    28°
                  </h3>

                  <p className="text-white/50 mt-2">
                    Perfect Conditions
                  </p>

                  <div className="flex gap-2 mt-6">

                    <div className="h-2 flex-1 rounded-full bg-[var(--accent)]" />
                    <div className="h-2 flex-1 rounded-full bg-[var(--accent)]/70" />
                    <div className="h-2 flex-1 rounded-full bg-[var(--accent)]/40" />

                  </div>

                </div>

                {/* BIG ANALYTICS */}
                <div className="col-span-2 rounded-3xl bg-white/[0.03] border border-white/10 p-6">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-white/50 text-sm">
                        Yield Analytics
                      </p>

                      <h3 className="text-white text-xl font-semibold mt-1">
                        AI Performance
                      </h3>
                    </div>

                    <span className="text-[var(--accent)] text-sm">
                      ● LIVE
                    </span>

                  </div>

                  <div className="flex items-end justify-between h-40 mt-10">

                    <div className="w-10 h-20 rounded-t-xl bg-[var(--accent)]" />
                    <div className="w-10 h-24 rounded-t-xl bg-[var(--accent)]" />
                    <div className="w-10 h-16 rounded-t-xl bg-[var(--accent)]" />
                    <div className="w-10 h-28 rounded-t-xl bg-[var(--accent)]" />
                    <div className="w-10 h-32 rounded-t-xl bg-[var(--accent)]" />
                    <div className="w-10 h-36 rounded-t-xl bg-[var(--accent)]" />
                    <div className="w-10 h-28 rounded-t-xl bg-[var(--accent)]" />

                  </div>

                  <div className="flex justify-between mt-5 text-xs text-white/40">

                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;