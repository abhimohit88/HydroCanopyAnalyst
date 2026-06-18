import { useState } from "react";
import {
  Building2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    mobile: "",
    role: "",
    interestedIn: "",
    message: "",
  });

  const officeLocations = [
    {
      title: "Registered Office",
      description:
        "AD - 77B, 1st Floor, Shalimar Bagh, Delhi - 110088",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setIsLoading(false);
      setErrorMsg("Email service is not configured yet. Please contact support.");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "abhimohitdixit88@gmail.com",
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          company: formData.company.trim() || "Not provided",
          phone: formData.mobile.trim() || "Not provided",
          role: formData.role.trim() || "Not provided",
          interested_in: formData.interestedIn,
          message: formData.message.trim(),
        },
        { publicKey }
      );

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        mobile: "",
        role: "",
        interestedIn: "",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch {
      setErrorMsg("Unable to send message right now. Please try again shortly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-sky-50 to-cyan-100 py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_34%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700 shadow-sm backdrop-blur">
            Get in Touch
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            <span className="block">Let&apos;s start the conversation around your next</span>
            <span className="block">water and sustainability project.</span>
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg lg:whitespace-nowrap">
            Share your requirements and our team will connect with you with the right guidance, timeline, and support.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-[0_24px_80px_-32px_rgba(14,165,233,0.35)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-3 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Contact Us</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Send us a message</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Fill out the form below and we&apos;ll get back to you as soon as possible. We&apos;re happy to help with restoration, investigation, sustainability, and general project planning.
            </p>
          </div>

          {isSubmitted && (
            <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800">
              Message sent successfully.
            </div>
          )}

          {errorMsg && (
            <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="relative">
                <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <User className="h-5 w-5 text-sky-500" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-sky-100 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Mail className="h-5 w-5 text-sky-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-sky-100 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="mb-2 block text-sm font-medium text-slate-700">Company / Organization</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Building2 className="h-5 w-5 text-emerald-500" />
                  </div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-emerald-100 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    placeholder="Your organization"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="mb-2 block text-sm font-medium text-slate-700">Phone Number</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Phone className="h-5 w-5 text-emerald-500" />
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-emerald-100 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-sky-100 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                  placeholder="Your role or designation"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">What type of support are you looking for?</label>
                <select
                  name="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-sky-100 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Sustainability Reporting / ESG Support">Sustainability Reporting / ESG Support</option>
                  <option value="Wastewater Treatment & Waterbody Restoration">Wastewater Treatment & Waterbody Restoration</option>
                  <option value="Geophysical / Subsurface Investigation">Geophysical / Subsurface Investigation</option>
                  <option value="Urban Planning & City Project Support">Urban Planning & City Project Support</option>
                  <option value="Climate Risk Assessment / Climate Data Advisory">Climate Risk Assessment / Climate Data Advisory</option>
                  <option value="Training, Workshops, or Capacity Building">Training, Workshops, or Capacity Building</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-slate-700">Your Message</label>
              <div className="relative">
                <div className="pointer-events-none absolute left-0 top-3 pl-4">
                  <MessageSquare className="h-5 w-5 text-sky-500" />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full rounded-2xl border border-sky-100 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                  placeholder="Tell us about your project, site, or support requirement"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:shadow-xl ${isLoading ? "cursor-not-allowed opacity-70" : ""}`}
            >
              <Send className="h-5 w-5" />
              <span>{isLoading ? "Sending..." : "Submit Message"}</span>
            </button>
          </form>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-[0_20px_60px_-32px_rgba(16,185,129,0.35)] backdrop-blur sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Contact Information</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">We&apos;re here to help</h2>
              <p className="mt-3 text-slate-600">
                Reach out through any of the channels below or visit one of our offices for project discussions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-2xl bg-white p-3 text-emerald-600 shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">Our Locations</h3>
                </div>
                <div className="space-y-4 text-sm leading-6 text-slate-700">
                  {officeLocations.map((office) => (
                    <div key={office.title}>
                      <p className="font-semibold text-slate-900">{office.title}</p>
                      <p>{office.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-sky-100 bg-sky-50/80 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-2xl bg-white p-3 text-sky-600 shadow-sm">
                      <Phone className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">Call Us</h3>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">+91 9453047196</p>
                  <p className="mt-2 text-sm text-slate-600">Monday to Saturday, 9:30 AM - 6:30 PM IST</p>
                </div>

                <div className="rounded-3xl border border-sky-100 bg-sky-50/80 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-2xl bg-white p-3 text-sky-600 shadow-sm">
                      <Mail className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">Email Us</h3>
                  </div>
                  <div className="space-y-1 text-sm text-slate-700">
                    <p>info@hydrocanopyanalyst.com</p>
                    <p>We&apos;ll respond within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-[0_20px_60px_-32px_rgba(14,165,233,0.35)] backdrop-blur sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Our Location</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Visit our registered office</h2>
              <p className="mt-3 text-slate-600">
                AD - 77B, 1st Floor, Shalimar Bagh, Delhi - 110088
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-sky-100 shadow-inner">
              <iframe
                title="Hydro Canopy Analyst location"
                src="https://www.google.com/maps?q=AD%20-77B%2C%201st%20Floor%2C%20Shalimar%20Bagh%2C%20Delhi%20110088&z=15&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
