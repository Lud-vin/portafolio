import React from "react";

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
        <h1 className="text-4xl font-bold mb-4">Hi, I'm [Your Name] 👋</h1>
        <p className="text-lg leading-relaxed max-w-xl">
          I'm a{" "}
          <span className="text-blue-400">
            Systems and Computer Science Engineer
          </span>{" "}
          with expertise across the
          <span className="text-green-400"> Full Stack</span>. Currently, I'm
          expanding my knowledge through a Master's in Cybersecurity, focusing
          on developing secure and efficient software systems.
        </p>
      </div>
    </section>
  );
}
