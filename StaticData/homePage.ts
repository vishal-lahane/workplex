import {
  BlogCard,
  CandidateCard,
  CatCard,
  CompWithJobCard,
  JobCard,
  Package,
} from "../Models/DataTypes";
import l1 from "../public/img/partners/l-1.png";
import l2 from "../public/img/partners/l-2.png";
import l3 from "../public/img/partners/l-3.png";
import l4 from "../public/img/partners/l-4.png";
import l5 from "../public/img/partners/l-5.png";
import l6 from "../public/img/partners/l-6.png";
import l7 from "../public/img/partners/l-7.png";
import l8 from "../public/img/partners/l-8.png";
import l9 from "../public/img/partners/l-9.png";
import l10 from "../public/img/partners/l-10.png";

import b4 from "../public/img/blogs/b-4.webp";
import b5 from "../public/img/blogs/b-5.webp";
import b6 from "../public/img/blogs/b-6.webp";

import t2 from "../public/img/blogs/team-2.webp";
import t3 from "../public/img/blogs/team-3.webp";
import t5 from "../public/img/blogs/team-5.webp";

export const jobs: JobCard[] = [
  {
    id: 1,
    type: "Full Time",
    logoPath: "",
    companyName: "Google Inc",
    jobTitle: "UI/UX Web Designer",
    jobLocation: "San Fransisco",
    salaryRange: "$50k - $80k PA.",
    posted: "3 days ago",
    expReq: "3 Year Exp.",
  },
  {
    id: 2,
    type: "Part Time",
    logoPath: "",
    companyName: "Google Inc",
    jobTitle: "UI/UX Web Designer",
    jobLocation: "San Fransisco",
    salaryRange: "$50k - $80k PA.",
    posted: "3 days ago",
    expReq: "3 Year Exp.",
  },
  {
    id: 3,
    type: "Contract",
    logoPath: "",
    companyName: "Google Inc",
    jobTitle: "UI/UX Web Designer",
    jobLocation: "San Fransisco",
    salaryRange: "$50k - $80k PA.",
    posted: "3 days ago",
    expReq: "3 Year Exp.",
  },
  {
    id: 4,
    type: "Intership",
    logoPath: "",
    companyName: "Google Inc",
    jobTitle: "UI/UX Web Designer",
    jobLocation: "San Fransisco",
    salaryRange: "$50k - $80k PA.",
    posted: "3 days ago",
    expReq: "3 Year Exp.",
  },
  {
    id: 5,
    type: "Full Time",
    logoPath: "",
    companyName: "Google Inc",
    jobTitle: "UI/UX Web Designer",
    jobLocation: "San Fransisco",
    salaryRange: "$50k - $80k PA.",
    posted: "3 days ago",
    expReq: "3 Year Exp.",
  },
  {
    id: 6,
    type: "Full Time",
    logoPath: "",
    companyName: "Google Inc",
    jobTitle: "UI/UX Web Designer",
    jobLocation: "San Fransisco",
    salaryRange: "$50k - $80k PA.",
    posted: "3 days ago",
    expReq: "3 Year Exp.",
  },
  {
    id: 7,
    type: "Full Time",
    logoPath: "",
    companyName: "Google Inc",
    jobTitle: "UI/UX Web Designer",
    jobLocation: "San Fransisco",
    salaryRange: "$50k - $80k PA.",
    posted: "3 days ago",
    expReq: "3 Year Exp.",
  },
  {
    id: 8,
    type: "Full Time",
    logoPath: "",
    companyName: "Google Inc",
    jobTitle: "UI/UX Web Designer",
    jobLocation: "San Fransisco",
    salaryRange: "$50k - $80k PA.",
    posted: "3 days ago",
    expReq: "3 Year Exp.",
  },
];

export const categories: CatCard[] = [
  {
    id: 1,
    icon: "lni lni-laptop-phone fs-lg theme-cl",
    catName: "Software Company",
    jobs: 678,
  },
  {
    id: 2,
    icon: "lni lni-cloud fs-lg theme-cl",
    catName: "Cloud Computing",
    jobs: 960,
  },
  {
    id: 3,
    icon: "lni lni-shopify fs-lg theme-cl",
    catName: "Logistics/Shipping",
    jobs: 438,
  },
  {
    id: 4,
    icon: "lni lni-construction fs-lg theme-cl",
    catName: "Engineering Services",
    jobs: 644,
  },
  {
    id: 5,
    icon: "lni lni-phone-set fs-lg theme-cl",
    catName: "Telecom/ Internet",
    jobs: 380,
  },
  {
    id: 6,
    icon: "lni lni-sthethoscope fs-lg theme-cl",
    catName: "Healthcare/Pharma",
    jobs: 472,
  },
  {
    id: 7,
    icon: "lni lni-money-protection fs-lg theme-cl",
    catName: "Finance/Insurance",
    jobs: 654,
  },
  {
    id: 8,
    icon: "lni lni-diamond fs-lg theme-cl",
    catName: "Product Software",
    jobs: 732,
  },
  {
    id: 9,
    icon: "lni lni-briefcase fs-lg theme-cl",
    catName: "Diversified/Retail",
    jobs: 610,
  },
  {
    id: 10,
    icon: "lni lni-graduation fs-lg theme-cl",
    catName: "Education",
    jobs: 960,
  },
  {
    id: 11,
    icon: "lni lni-mastercard fs-lg theme-cl",
    catName: "Banking/BPO",
    jobs: 740,
  },
  {
    id: 12,
    icon: "lni lni-gallery fs-lg theme-cl",
    catName: "Printing & Packaging",
    jobs: 425,
  },
];

export const partnerLogos: any[] = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];

export const packages: Package[] = [
  {
    id: 1,
    name: "Basic",
    price: 29,
    users: 1,
    uptime: "99.5",
    bandwidth: 120,
    storage: 5,
    phs: false,
    esla: false,
    bestVal: false,
  },
  {
    id: 2,
    name: "Standard",
    price: 49,
    users: 1,
    uptime: "99.5",
    bandwidth: 150,
    storage: 10,
    phs: true,
    esla: false,
    bestVal: true,
  },
  {
    id: 3,
    name: "Platinum",
    price: 79,
    users: 2,
    uptime: "100",
    bandwidth: 200,
    storage: 20,
    phs: true,
    esla: true,
    bestVal: false,
  },
];

export const blogs: BlogCard[] = [
  {
    id: 1,
    banner: b4,
    catgory: "Marketing",
    title: "How To Register & Enrolled on SkillUp Step by Step?",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    user: t2,
    views: "10K",
    published: "10 July 2021",
  },
  {
    id: 2,
    banner: b5,
    catgory: "Business",
    title: "Let's Know How Skillup Work Fast and Secure?",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    user: t3,
    views: "10K",
    published: "10 July 2021",
  },
  {
    id: 1,
    banner: b6,
    catgory: "Accounting",
    title: "How To Improove Digital Marketing for Fast SEO",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    user: t5,
    views: "10K",
    published: "10 July 2021",
  },
];

export const companiesWithJob: CompWithJobCard[] = [
  {
    id: 1,
    logo: l1,
    companyName: "Web Designing",
    jobs: 302,
  },
  {
    id: 2,
    logo: l2,
    companyName: "Web Designing",
    jobs: 302,
  },
  {
    id: 3,
    logo: l3,
    companyName: "Web Designing",
    jobs: 302,
  },
  {
    id: 4,
    logo: l4,
    companyName: "Web Designing",
    jobs: 302,
  },
  {
    id: 5,
    logo: l5,
    companyName: "Web Designing",
    jobs: 302,
  },
  {
    id: 6,
    logo: l6,
    companyName: "Web Designing",
    jobs: 302,
  },
  {
    id: 7,
    logo: l7,
    companyName: "Web Designing",
    jobs: 302,
  },
];

export const candidates: CandidateCard[] = [
  {
    name: "John K. Surber",
  },
  {
    name: "Loretta E. Reyes",
  },
  {
    name: "Adam B. Johnston",
  },
  {
    name: "Jessica G. Leininger",
  },
  {
    name: "Charles T. Gerena",
  },
  {
    name: "Julie D. Morales",
  },
  {
    name: "Samantha D. Hebert",
  },
  {
    name: "Patricia B. North",
  },
];
