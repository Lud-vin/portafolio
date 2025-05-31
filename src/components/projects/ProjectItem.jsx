export default function ProjectItem(props) {
    const { link, imgPath, name, description, techStacks, codeLink } = props;

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="relative flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg bg-gray-900 group"
        >
            {/* Texto */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between text-gray-200 bg-gray-800">
                <div>
                    <h2 className="text-2xl font-bold mb-2">{name}</h2>
                    <p className="text-base mb-4">{description}</p>
                    <div>
                        <h3 className="font-semibold mb-1">Tech Stack:</h3>
                        <ul className="flex flex-wrap gap-2">
                            {techStacks.map((tech, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-700 px-3 py-1 rounded-full text-sm border border-gray-500"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {codeLink && (
                    <div className="mt-4">
                        <a
                            href={codeLink}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-blue-400 hover:underline text-sm"
                        >
                            View Source Code →
                        </a>
                    </div>
                )}
            </div>

            {/* Imagen */}
            <div className="md:w-1/2 h-[300px] md:h-[500px] relative">
                <img
                    src={imgPath}
                    alt={`${name} Preview`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">
                        Click to visit website
                    </span>
                </div>
            </div>
        </a>
    );
}