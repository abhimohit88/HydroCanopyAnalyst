import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Linkedin } from "lucide-react";
import { boardMembers, fadeUp } from "./aboutData";

const linkIcons = {
  linkedin: Linkedin,
  scholar: GraduationCap,
};

const AboutBoardOfDirectors = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">
            Leadership
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Board of Directors
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Meet the leadership team guiding Hydro Canopy Analyst with deep expertise in water intelligence,
            sustainability, science, and strategic growth.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {boardMembers.map((member, index) => (
            <motion.article
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-[28px] border border-sky-100 bg-gradient-to-br from-white via-sky-50/40 to-emerald-50/40 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </div>

              <div className="p-7 sm:p-8">
                <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {member.designation}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {member.links.map((link) => {
                    const Icon = linkIcons[link.type] || ArrowUpRight;
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
                        aria-label={`${member.name} ${link.label}`}
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBoardOfDirectors;
