import { motion } from "framer-motion";
import { Droplets } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-cyan-700 to-emerald-700 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-2 pb-28 pt-32 text-center sm:px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] backdrop-blur"
        >
          <Droplets className="h-4 w-4" />
          Our Core Philosophy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-none text-3xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          Water connects ecosystems, infrastructure, and industries to secure a resilient future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-8 text-sky-50/90 sm:text-lg"
        >
          At Hydro Canopy Analyst, our philosophy is built on a simple belief: water is
          not only a natural resource—it is a strategic asset that underpins.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {["Business Resilience ", "Environmental Stability", "Sustainable Growth"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>
      </div>

      <svg
        className="relative block w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#ffffff"
          d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L0,120Z"
        />
      </svg>
    </section>
  );
};

export default AboutHero;
