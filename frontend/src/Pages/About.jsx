import { motion } from "framer-motion";
import {
  Droplets,
  Leaf,
  Users,
  Building2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const systems = [
  {
    title: "Natural Systems",
    icon: Leaf,
    accent: "emerald",
    description:
      "Healthy water resources sustain the natural capital upon which all life depends.",
    items: [
      "Aquifers and groundwater systems",
      "Rivers, lakes, and wetlands",
      "Forests and landscapes",
      "Biodiversity and ecosystem services",
      "Watersheds and critical habitats",
    ],
  },
  {
    title: "Social Systems",
    icon: Users,
    accent: "teal",
    description:
      "Reliable and sustainable water resources support thriving communities and resilient societies.",
    items: [
      "Public health and sanitation",
      "Livelihoods and local economies",
      "Food and nutritional security",
      "Community resilience",
      "Social equity and well-being",
    ],
  },
  {
    title: "Economic Systems",
    icon: Building2,
    accent: "sky",
    description:
      "Water is a strategic resource that underpins economic development and business continuity.",
    items: [
      "Agriculture and food production",
      "Manufacturing and industrial operations",
      "Mining and resource extraction",
      "Energy generation and transition",
      "Urban infrastructure and development",
      "Financial and investment performance",
    ],
  },
];

const accentStyles = {
  emerald: {
    ring: "border-emerald-100",
    icon: "bg-emerald-500",
    dot: "text-emerald-500",
    bar: "from-emerald-400 to-emerald-600",
  },
  teal: {
    ring: "border-teal-100",
    icon: "bg-teal-500",
    dot: "text-teal-500",
    bar: "from-teal-400 to-cyan-500",
  },
  sky: {
    ring: "border-sky-100",
    icon: "bg-sky-500",
    dot: "text-sky-500",
    bar: "from-sky-400 to-blue-600",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-cyan-700 to-emerald-700 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-32 text-center">
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
            className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Water Connects Everything
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-sky-50/90 sm:text-lg"
          >
            About Hydro Canopy Analyst Pvt. Ltd. — we believe water is the
            foundation of environmental sustainability, economic prosperity, and
            societal well-being.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {["Water Intelligence", "Climate Resilience", "Sustainability Advisory"].map(
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

      {/* PHILOSOPHY */}
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

      {/* INTERCONNECTED SYSTEMS */}
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

      {/* BUILDING RESILIENCE */}
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
    </div>
  );
};

export default About