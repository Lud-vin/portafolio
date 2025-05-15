export default function ProjectItem(props) {
    const { link, imgPath, name, description, techStacks } = props;

    return (
        <div className="relative group rounded-xl overflow-hidden shadow-lg bg-gray-900 h-[600px]">
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="block h-full"
            >
                <img
                    src={imgPath}
                    alt={`${name} Preview`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-50"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between items-center text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 bg-black bg-opacity-60">
                    
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center">{name}</h2>

                    {/* Description */}
                    <p className="text-lg text-center px-4">{description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-3 justify-center mb-2">
                        {techStacks.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-gray-800 px-3 py-1 text-5xl rounded-full border border-gray-500"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    );
}
