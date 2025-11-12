import ExperienceSection from "./components/experienceSection";
import HeaderSection from "./components/headerSection";

export default function Home() {
  const userInfo = {
    name: "Lucacel Razvan",
    title: "Sr. Full Stack Developer",
    bio: `Hi, I'm a versatile programmer with 7+ years of experience across various industries. 
    Specialized in mobile and web fullstack development. 
    Adaptable, professional, delivering innovative solutions. I find myself creative and driven when working on projects that challenge me to think outside the box.
    I consider myself a problem solver and a jack of all trades, always eager to learn new technologies or improve my skills.`,
    interests: ["🎨 Painting", "🧗 Climbing", "🍳 Cooking", "🎮 Gaming"],
    techStack: [
      { icon: "/techstack/react-icon.svg", name: "React-Native" },
      { icon: "/techstack/nextjs-icon.svg", name: "Next.js" },
      { icon: "/techstack/vuejs-icon.svg", name: "Vue.js" },
      { icon: "/techstack/typescript-icon.svg", name: "TypeScript" },
      { icon: "/techstack/nestjs-icon.svg", name: "Nest.js" },
      { icon: "/techstack/mongodb-icon.svg", name: "MongoDB" },
      { icon: "/techstack/postgresql-icon.svg", name: "PostgreSQL" },
    ],
  };

  const experiences = [
    {
      company: "Tapptitude",
      startDate: "Apr 2024",
      endDate: "Oct 2025",
      title: "Senior Full Stack Developer",
      description: `● Decupled important services from a monolithic architecture in order to prevent bottlenecks and improve scalability.
        ● Implemented a feature for users to create workflows similar to Jira actions with a graph structure using Nest.js events and Agenda job scheduler.
        ● Designed the architecture for email deliverability system ensuring high deliverability rates with SendGrid.
        `,
      article: "https://tapptitude.com/blog/nail-marketing-campaigns",
    },
    {
      company: "Machinations",
      startDate: "Oct 2022",
      endDate: "Mar 2024",
      title: "Senior Full Stack Developer",
      description: `● Refactored the authorization system to use SAML and OAuth2 protocols improving security and enabling SSO for enterprise clients.
        ● Migrated the community app from a wordpress implementation to a Nuxt.js app improving performance and user experience.
        ● Implemented a tutorial system for the main app using Intro.js library to improve user onboarding and retention.
        `,
    },
    {
      company: "Win",
      startDate: "Feb 2022",
      endDate: "Sep 2022",
      title: "React Native Developer",
      description: `● I worked on features and implementation for a React-Native application that also had Native (Android and IOS) functionality and integration with Unity. I also learned to use and work with a GraphQL backend. Gained significant experience in the cryptocurrency sector.
        `,
    },
    {
      company: "Tapptitude",
      startDate: "Jun 2019",
      endDate: "Sep 2022",
      title: "React Native Developer",
      description: `● Transitioned from a junior developer to a seasoned professional, gaining deep expertise in both web and mobile development. Mastered native mobile applications Android and IOS and cross-platform solutions using React Native, while also working extensively on frontend development with Vue.js and React.js. Acquired and applied a wide range of tools and skills, implementing innovative features across multiple applications and contributing to their overall success.
        `,
    },
    {
      company: "Altran",
      startDate: "Sep 2017",
      endDate: "Jun 2019",
      title: "React Native Developer",
      description: `● Developing software for TWINSCAN machine 
          Responsibilities:
            Responsible with the design, implementation, testing and/or documentation
            Software development, task estimations, writing of documentation and as a feature integrator to manage deliveries
            Secure both software and product quality
            Documentation on projects and code changes
        `,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 max-w-7xl">
        <HeaderSection {...userInfo} />
        <ExperienceSection experiences={experiences} />
      </main>
    </div>
  );
}
