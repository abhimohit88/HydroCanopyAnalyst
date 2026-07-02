import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
import { systems, accentStyles, fadeUp } from "./aboutData";

const AboutSystems = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
            Interconnected Systems
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Three systems, one connecting force
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Water links natural systems, human development, business
            performance, and economic growth into a single, interdependent
            whole.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {systems.map((system, index) => {
            const accent = accentStyles[system.accent];
            const Icon = system.icon;
            return (
              <motion.div
                key={system.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative flex flex-col rounded-3xl border ${accent.ring} bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}
              >
                <div
                  className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${accent.bar}`}
                />
                <div
                  className={`mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accent.icon} text-white shadow-lg`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {system.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {system.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {system.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <Droplets
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${accent.dot}`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSystems;
