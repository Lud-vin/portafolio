import ProjectItem from "./ProjectItem";

export default function ProjectSection() {
  const projects = [
    {
      link: "https://lemon-front.netlify.app/",
      codelink: "https://github.com/Lud-vin/lemon_front-end",
      imgPath: "project7.png",
      name: "Lemon Restaurant Front-end",
      description: (
        <>
          A modern restaurant web app with <strong>user authentication</strong>,{" "}
          <strong>shopping cart functionality</strong>, and{" "}
          <strong>Stripe payment integration</strong>. Users can browse the
          menu, place orders, and pay securely.
          <br />
          <br />
          <strong>Demo Account or create a new user:</strong> Username:{" "}
          <code>customer</code>, Password: <code>test1234</code>
        </>
      ),
      techStacks: [
        "React",
        "tailwindcss",
        "Shadcn",
        "JavaScript",
        "CSS",
        "stripe",
      ],
    },

    {
      link: "https://little-lemon-api-yexw.onrender.com/admin",
      codelink: "https://github.com/Ludvin7x/littlelemon-api",
      imgPath: "project3.png",
      name: "Lemon Restaurant Back-end",
      description: (
        <>
          A robust RESTful API built for managing a restaurant platform. It
          features <strong>JWT-based authentication</strong>,{" "}
          <strong>user and role management</strong>,{" "}
          <strong>shopping cart handling</strong>,{" "}
          <strong>Stripe payment integration</strong>,{" "}
          <strong>pagination</strong>, and{" "}
          <strong>filtering capabilities</strong> for efficient data access.
        </>
      ),
      techStacks: ["Django", "Python", "MySQL", "JWT", "SQLite", "Stripe"],
    },
    {
      link: "https://gestion-empleados-api.onrender.com",
      codelink: "https://github.com/Ludvin7x/empleados-Backend",
      imgPath: "project2.png",
      name: "Employee Management Back-end",
      description: "API for managing employee data, including CRUD operations",
      techStacks: ["Flask", "SQLite", "Python"],
    },
    {
      link: "https://empleados-frontend.netlify.app/",
      codelink: "https://github.com/Ludvin7x/empleados-Backend",
      imgPath: "project4.png",
      name: "Employee Management Front-end",
      description:
        "Web application for managing employee data, including CRUD operations.",
      techStacks: ["Angular", "TypeScript", "Bootstrap"],
    },
    {
      link: "https://github.com/Ludvin7x/Control-visitas",
      codelink: "https://github.com/Ludvin7x/Control-visitas",
      imgPath: "project6.png",
      name: "Visitor Management App",
      description:
        "Android app for managing visitor access, notifications, and reporting for both residents and admins.",
      techStacks: ["Kotlin", "Android", "Firebase", "NoSQL"],
    },
    {
      link: "https://ludwingdf.wixsite.com/ayleen",
      codelink: "https://github.com/Ludvin7x/Ayleen-Restaurant",
      imgPath: "project5.png",
      name: "Ayleen Restaurant",
      description:
        "Web-based restaurant ordering system with a user-friendly interface for easy navigation and ordering.",
      techStacks: ["React"],
    },
    {
      link: "https://ludvin7x-portfolio.netlify.app/",
      codelink: "https://github.com/Ludvin7x/portafolio",
      imgPath: "project1.png",
      name: "📜 Portfolio 💼",
      description:
        "My personal portfolio showcasing my projects, skills, and experience.",
      techStacks: ["React", "TailwindCSS"],
    },
  ];

  return (
    <>
      <h3 className="text-center text-3xl text-gray-200 font-semibold">
        Projects
      </h3>
      <div className="grid grid-cols-1 gap-10 pt-12 pb-20 xl:w-3/4 2xs:w-full lg:w-5/6 mx-auto">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            link={project.link}
            imgPath={project.imgPath}
            name={project.name}
            description={project.description}
            codeLink={project.codelink}
            techStacks={project.techStacks}
          />
        ))}
      </div>
      <hr className="border-gray-700 mt-10" />
    </>
  );
}
