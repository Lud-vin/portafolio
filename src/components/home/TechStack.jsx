import React from 'react';
import Marquee from 'react-fast-marquee';

export default function TechStack() {
  const images = [
    {
      name: "React",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "MySQL",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "Python",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Django",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "JavaScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "SQL",
      url: "https://cdn-icons-png.flaticon.com/128/4248/4248443.png",
    },
    {
      name: "Git",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Node.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "C#",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", 
    },
    {
      name: ".NET",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
    }
  ];
  
  return (
    <section className="my-20 flex flex-col items-center bg-gray-900 p-10 rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-200 mb-8">
        TECH STACK
      </h1>

      <Marquee gradient={false} speed={50} pauseOnHover={true} loop={0}>
        {images.map((tech, index) => (
          <img
            key={index}
            src={tech.url}
            alt={tech.name}
            style={{
              width: 60,
              height: 60,
              margin: '0 20px',
              objectFit: 'contain',
              userSelect: 'none',
            }}
            draggable={false}
          />
        ))}
      </Marquee>
    </section>
  );
}
