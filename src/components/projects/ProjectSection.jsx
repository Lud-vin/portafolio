import ProjectItem from "./ProjectItem";

export default function ProjectSection() {
    const projects = [
        {
            link: "https://restaurant-littlelemon.netlify.app/",
            imgPath: "project7.png",
            name: "Little Lemon Restaurant",
            description: "A modern restaurant website with an intuitive menu and ordering experience.",
            techStacks: ["React", "JavaScript"]
        },
        {
            link: "https://ludwingdf.wixsite.com/ayleen",
            imgPath: "project5.png",
            name: "Ayleen Restaurant",
            description: "Web-based restaurant ordering system with a user-friendly interface for easy navigation and ordering.",
            techStacks: ["React", "Wix"]
        },
        {
            link: "https://gestion-empleados-api.onrender.com",
            imgPath: "project2.png",
            name: "API for Employee Management",
            description: "API for managing employee data, including CRUD operations",
            techStacks: ["Flask-Restx", "SqLite", "Python"]
        },
        {
            link: "https://empleados-frontend.netlify.app/",
            imgPath: "project4.png",
            name: "Employee Management",
            description: "Web application for managing employee data, including CRUD operations.",
            techStacks: ["Angular", "TypeScript", "Bootstrap"]
        },
        {
            link: "https://github.com/Ludvin7x/Control-visitas",
            imgPath: "project6.png",
            name: "Visitor Management App",
            description: "Android app for managing visitor access, notifications, and reporting for both residents and admins.",
            techStacks: ["Kotlin", "Android", "Firebase", "NoSQL"]
        },
        {
            link: "https://lud-portfolio.netlify.app/",
            imgPath: "project3.png",
            name: "Personal website",
            description: "A personal project for showcasing media content and UI experiments.",
            techStacks: ["React", "JavaScript"]
        },
        {
            link: "https://ludvin7x-portfolio.netlify.app/",
            imgPath: "project1.png",
            name: "📜 Portfolio 💼",
            description: "My personal portfolio showcasing my projects, skills, and experience.",
            techStacks: ["React", "TailwindCSS"]
        },
    ];

    return (
        <>
            <h3 className="text-center text-3xl text-gray-200 font-semibold">Projects</h3>
            <div className="grid grid-cols-1 gap-10 pt-12 pb-20 xl:w-3/4 2xs:w-full lg:w-5/6 mx-auto">
                {projects.map((project, index) => (
                    <ProjectItem
                        key={index}
                        link={project.link}
                        imgPath={project.imgPath}
                        name={project.name}
                        description={project.description}
                        techStacks={project.techStacks}
                    />
                ))}
            </div>
            <hr className="border-gray-700 mt-10" />
        </>
    );
}