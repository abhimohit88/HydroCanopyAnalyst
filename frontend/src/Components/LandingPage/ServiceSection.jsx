import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Droplets,
  CloudRain,
  Waves,
  Building2,
  Truck,
  BarChart3,
  Leaf,
  TreePine,
  Scale,
  TrendingUp,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    label: "Water & Climate Resilience",
    description:
      "Safeguarding water resources and building resilience against a changing climate.",
    accent: "sky",
    solutions: [
      {
        icon: Droplets,
        title: "Water Security & Resource Sustainability",
        paragraph:
          "Science-based assessment of supply, demand, and watershed health to secure long-term water availability across operations and regions.",
      },
      {
        icon: CloudRain,
        title: "Climate Resilience & Adaptation Planning",
        paragraph:
          "Anticipate climate-driven risks and design robust adaptation strategies that protect people, assets, and ecosystems.",
      },
      {
        icon: Waves,
        title: "Urban Resilience & Flood Risk Management",
        paragraph:
          "Flood modeling, stormwater planning, and resilient infrastructure that reduce urban vulnerability and strengthen cities.",
      },
    ],
  },
  {
    label: "Corporate Sustainability & Operations",
    description:
      "Protecting business continuity and driving credible sustainability performance.",
    accent: "teal",
    solutions: [
      {
        icon: Building2,
        title: "Corporate Operations & Business Continuity",
        paragraph:
          "Risk intelligence that shields operations from water and climate disruption while strengthening operational resilience.",
      },
      {
        icon: Truck,
        title: "Sustainable & Resilient Supply Chains",
        paragraph:
          "Map and mitigate environmental risks across your value chain to build transparent, responsible, and resilient supply networks.",
      },
      {
        icon: BarChart3,
        title: "ESG Performance & Sustainability Reporting",
        paragraph:
          "Measure, disclose, and improve ESG performance with credible, standards-aligned reporting and meaningful target setting.",
      },
    ],
  },
  {
    label: "Nature & Ecosystems",
    description:
      "Restoring ecosystems and embedding the value of nature into decisions.",
    accent: "emerald",
    solutions: [
      {
        icon: Leaf,
        title: "Biodiversity Conservation & Ecosystem Restoration",
        paragraph:
          "Restore degraded landscapes and protect biodiversity through nature-based solutions and ecosystem restoration programs.",
      },
      {
        icon: TreePine,
        title: "Natural Capital Preservation & Valuation",
        paragraph:
          "Quantify and preserve natural assets to embed nature into strategy, risk management, and long-term decision-making.",
      },
    ],
  },
  {
    label: "Governance, Finance & Community",
    description:
      "Enabling compliant, well-financed, and socially inclusive sustainability.",
    accent: "cyan",
    solutions: [
      {
        icon: Scale,
        title: "Regulatory Compliance & Environmental Governance",
        paragraph:
          "Navigate evolving regulations with robust governance frameworks, environmental audits, and compliance assurance.",
      },
      {
        icon: TrendingUp,
        title: "Investment Risk Assessment & Sustainable Finance",
        paragraph:
          "Integrate water and climate risk into investment decisions and unlock sustainable finance with data-driven due diligence.",
      },
      {
        icon: HeartHandshake,
        title: "Community Development & Social Resilience",
        paragraph:
          "Strengthen social equity and community resilience through inclusive, water-secure, and people-centered development.",
      },
    ],
  },
];

const accentStyles = {
  sky: {
    chip: "bg-sky-100 text-sky-700",
    icon: "bg-gradient-to-br from-sky-500 to-blue-600",
    bar: "bg-sky-500",
    hover: "hover:border-sky-200",
    link: "text-sky-600",
  },
  teal: {
    chip: "bg-teal-100 text-teal-700",
    icon: "bg-gradient-to-br from-teal-500 to-cyan-600",
    bar: "bg-teal-500",
    hover: "hover:border-teal-200",
    link: "text-teal-600",
  },
  emerald: {
    chip: "bg-emerald-100 text-emerald-700",
    icon: "bg-gradient-to-br from-emerald-500 to-green-600",
    bar: "bg-emerald-500",
    hover: "hover:border-emerald-200",
    link: "text-emerald-600",
  },
  cyan: {
    chip: "bg-cyan-100 text-cyan-700",
    icon: "bg-gradient-to-br from-cyan-500 to-sky-600",
    bar: "bg-cyan-500",
    hover: "hover:border-cyan-200",
    link: "text-cyan-600",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ServiceSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700 shadow-sm"
          >
            <Droplets className="h-4 w-4" />
            Our Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Integrated water, climate &amp; sustainability solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base leading-7 text-slate-600 sm:text-lg"
          >
            We turn complex water and climate challenges into strategic
            opportunities through science-based insight, technology, and
            sustainable solutions—organized across four connected solution
            pillars.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="mt-16 space-y-16">
          {pillars.map((pillar) => {
            const accent = accentStyles[pillar.accent];
            return (
              <div key={pillar.label}>
                <div className="mb-8 flex flex-col items-start gap-3 border-l-4 border-slate-200 pl-5 sm:flex-row sm:items-end sm:justify-between sm:border-l-0 sm:pl-0">
                  <div className="sm:max-w-2xl">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${accent.chip}`}
                    >
                      Solution Pillar
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                      {pillar.label}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 sm:text-base">
                      {pillar.description}
                    </p>
                  </div>
                  <span className={`hidden h-1 w-24 rounded-full sm:block ${accent.bar}`} />
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {pillar.solutions.map((solution, index) => {
                    const Icon = solution.icon;
                    return (
                      <motion.div
                        key={solution.title}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className={`group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${accent.hover}`}
                      >
                        <div
                          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ${accent.icon}`}
                        >
                          <Icon className="h-7 w-7" />
                        </div>
                        <h4 className="mt-5 text-lg font-bold leading-snug text-slate-900">
                          {solution.title}
                        </h4>
                        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                          {solution.paragraph}
                        </p>
                        <Link
                          to="/contact"
                          className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${accent.link}`}
                        >
                          Learn more
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-sky-700 via-cyan-700 to-emerald-700 px-8 py-12 text-center text-white shadow-xl"
        >
          <h3 className="mx-auto max-w-2xl text-2xl font-bold sm:text-3xl">
            Not sure which solution fits your challenge?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sky-50/90">
            Talk to our experts and we&apos;ll help you build a tailored,
            science-based pathway to water security and resilience.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-sky-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get in touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
