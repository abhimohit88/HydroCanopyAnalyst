import { Leaf, Users, Building2 } from "lucide-react";

export const systems = [
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

export const accentStyles = {
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

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const boardMembers = [
  {
    name: "Dr. Suneel Kumar Joshi",
    designation: "Founder & Chief Executive Officer",
    image: "/CommonImages/Dr. Suneel Joshi.png",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/dr-suneel-kumar-joshi-51631916/",
        type: "linkedin",
      },
      {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?user=109kmTwAAAAJ&hl=en",
        type: "scholar",
      },
    ],
  },
  {
    name: "Ms. Monika Malviya",
    designation: "Director of Finance",
    image: "/CommonImages/Monika.jpg",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/monika-malviya-41304a417/",
        type: "linkedin",
      },
    ],
  },
];

export const mentor = {
  name: "Prof. Rajiv Sinha",
  designation: "Professor, Department of Earth Sciences",
  organization: "Indian Institute of Technology Kanpur",
  address: "Kanpur 208016, India",
  image: "/CommonImages/Rajiv Sinha.jpeg",
  website: "https://www.iitk.ac.in/rajiv-sinha",
};

export const technicalAdvisors = [
  {
    name: "Mr. Anil Joshi",
    designation: "Data Scientist and Management",
  },
  {
    name: "Mr. Sonu Joshi",
    designation: "Lead - GIS Analyst & Hydrogeologist",
  },
  {
    name: "Dr. Sneha Gautam",
    designation: "Air Quality Expert",
  },
  {
    name: "Dr. Somil Swarnkar",
    designation: "Hydraulic and Hydrology Expert",
  },
  {
    name: "Dr. Shobhit Singh",
    designation: "Geomorphologist and River Scientist",
  },
  {
    name: "Dr. Utsav Mishra",
    designation: "Geophysicist & Seismic Expert",
  },
  {
    name: "Dr. Divyesh Varade",
    designation: "Remote Sensing Expert",
  },
  {
    name: "Dr. Manudeo Singh",
    designation: "Wetland Expert",
  },
  {
    name: "Dr. Sandeep Shukla",
    designation: "Glaciologist",
  },
];
