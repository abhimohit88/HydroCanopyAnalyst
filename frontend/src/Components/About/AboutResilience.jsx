import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeUp } from "./aboutData";

const AboutResilience = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-700 to-sky-800 py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] backdrop-blur">
          <ShieldCheck className="h-4 w-4" />
          Building Resilience
        </span>
        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold sm:text-4xl">
          Building Resilience Through Water Intelligence
        </h2>

        <div className="mx-auto mt-8 max-w-3xl space-y-6 text-left text-base leading-8 text-emerald-50/90 sm:text-lg">
          <p>
            The future of sustainable development depends on recognizing the
            interconnectedness of water, climate, ecosystems, communities, and
            economies. Organizations that understand these linkages are better
            positioned to manage risk, strengthen resilience, unlock
            opportunities, and create long-term value.
          </p>
          <p>
            At Hydro Canopy Analyst, we help governments, corporations,
            investors, and development institutions transform water-related
            challenges into strategic opportunities through science-based
            insights, innovative technologies, and sustainable solutions.
          </p>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur"
        >
          <p className="text-lg font-semibold sm:text-xl">
            When water is managed sustainably, economies prosper, ecosystems
            thrive, businesses become more resilient, and communities flourish.
          </p>
        </motion.div>

        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-emerald-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Start a conversation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutResilience;
