import { motion } from "framer-motion";
import { fadeUp } from "./aboutData";

const AboutPhilosophy = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">
          The Foundation
        </span>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          Why water sits at the center of everything
        </h2>

        <div className="mt-6 space-y-5 text-left text-base leading-8 text-slate-600 sm:text-lg">
          <p>
            Every ecosystem, community, industry, and economy depends on
            water—either directly or indirectly. As climate change, resource
            constraints, and environmental risks intensify, understanding the
            interconnected nature of water has become essential for informed
            decision-making and long-term resilience.
          </p>
        </div>

        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-50 to-emerald-50 p-8 text-lg font-medium text-slate-800 shadow-sm sm:text-xl"
        >
          “Water is not an isolated resource; it is the critical link that
          connects natural systems, human development, business performance,
          and economic growth.”
        </motion.blockquote>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
