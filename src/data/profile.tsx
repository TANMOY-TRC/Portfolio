import type { Profile } from "@/types/profile";

const bio: Profile["bio"] = <>
  With a background in Computer Science and Engineering, I have developed a diverse skill set at
  the intersection of software engineering and machine learning. My work focuses on building
  impactful solutions, while actively exploring the frontiers of Machine Learning and AI research.
  <br /><br />
  My technical foundation is built on C, C++, Python, and Java, along with hands-on experience in
  technologies such as React, React Native, Django, and Android development. Whether building
  user-centric applications or exploring research-oriented problems, I am driven by the desire to
  create innovative solutions where code meets real-world impact.
  <br /><br />
  Always learning, always building.
</>;

const roles: Profile["roles"] = [
  "Software Engineer",
  "Full Stack Developer",
  "Database Engineer",
  "IT Support Specialist",
  "AI/ML Developer"
];

const tagline: Profile["tagline"] = <>
  Engineer by passion,<br />
  researcher by curiosity
</>;

const footerBio: Profile["footerBio"] = <>
  Driven by curiosity, shaped by engineering, guided by purpose.
  Exploring ideas, refining systems, and creating with intent.
</>;

export const profile: Profile = {
  name: "Tanmoy Roy",
  photo: "/image/profile.png",
  roles: roles,
  activeRole: "Software Engineer and Researcher",
  badgeText: "Elegantly Reborn for Bold Innovation",
  tagline: tagline,
  missionStatement: "Crafting intelligent solutions with purpose and precision",
  bio: bio,
  footerBio: footerBio,
  copyrightYear: 2026,
  cv: "/document/CV.pdf"
};
