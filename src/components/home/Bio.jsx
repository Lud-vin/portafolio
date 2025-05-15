import React from 'react';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-900 text-white p-10 rounded-lg my-20">
      {/* Profile Image */}
      <div className="mb-6 md:mb-0 md:mr-10 flex-shrink-0">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-700 shadow-lg"
        />
      </div>

      {/* Intro Text */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Ludvin 👋</h1>
        <p className="text-lg leading-relaxed max-w-xl">
          I'm a passionate <span className="text-blue-400">Software Engineer</span> and 
          <span className="text-green-400"> Cybersecurity Master's student</span> with experience in building 
          secure, scalable web applications. I enjoy creating elegant solutions with 
          modern technologies like <strong>React</strong>, <strong>Python</strong>, and <strong>Django</strong>, 
          and I'm always eager to learn something new.
        </p>
      </div>
    </section>
  );
}