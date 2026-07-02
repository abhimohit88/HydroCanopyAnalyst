import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Users } from "lucide-react";
import { fadeUp, mentor, technicalAdvisors } from "./aboutData";

const AboutMentorsAdvisors = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
            Guidance & Expertise
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Mentors & Technical Advisors
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            A multidisciplinary network of academic, technical, and sector specialists strengthening our
            scientific rigor and execution capabilities.
          </p>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm"
        >
          <div className="grid gap-0 lg:grid-cols-[1.05fr_1.2fr]">
            <div className="relative min-h-[320px] bg-slate-100">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <Users className="h-4 w-4" />
                Mentor
              </div>
              <h3 className="mt-5 text-3xl font-bold text-slate-900">{mentor.name}</h3>
              <p className="mt-3 text-lg font-medium text-slate-700">{mentor.designation}</p>
              <p className="mt-2 text-base text-slate-600">{mentor.organization}</p>
              <p className="mt-1 text-base text-slate-500">{mentor.address}</p>

              <a
                href={mentor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                aria-label={`${mentor.name} Website`}
              >
                <Globe className="h-4 w-4" />
                Visit Website
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Technical Advisors & Team</h3>
              <p className="mt-2 text-base text-slate-600">
                Experienced specialists supporting Hydro Canopy Analyst across geoscience, climate, data, and water systems.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technicalAdvisors.map((advisor, index) => (
              <motion.article
                key={advisor.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h4 className="text-lg font-semibold text-slate-900">{advisor.name}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{advisor.designation}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMentorsAdvisors;
