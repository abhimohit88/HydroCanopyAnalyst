import React from "react";
import { motion } from "framer-motion";
import WebinarCard from "./WebinarCard";
import { webinars } from "../../Data/webinars";
import SectionHeading from "../../Common/SectionHeading";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const WebinarSection = () => {
  void motion;

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-24 pb-12 min-h-screen">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <SectionHeading>Webinar</SectionHeading>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-12 sm:py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {webinars.map((webinar, index) => (
            <motion.div
              key={webinar.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
              }}
            >
              <WebinarCard webinar={webinar} isPdf />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebinarSection;
