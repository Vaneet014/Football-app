
import React from "react";

export default function Home() {
  return (
    <div
      className="home-page h-full pt-3s bg-cover bg-center relative"
      style={{ backgroundImage: "url('/image-welcome.jpg')" }}
    >
     
      <div className="absolute inset-0 bg-black opacity-60"></div>

      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 sm:px-8">
        {/* Welcome Text */}
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-center animate-slideIn">
          Welcome to the Football App
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-center animate-fadeIn">
          Explore live scores, league details, and awards from the world of football.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-3xl">
          <a
            href="/live-scores"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white text-lg sm:text-xl py-3 px-5 rounded-lg text-center transition-all transform hover:scale-105 shadow-md"
          >
            Live Scores
          </a>
          <a
            href="/rules"
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 text-white text-lg sm:text-xl py-3 px-5 rounded-lg text-center transition-all transform hover:scale-105 shadow-md"
          >
            Rules
          </a>
          <a
            href="/login"
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white text-lg sm:text-xl py-3 px-5 rounded-lg text-center transition-all transform hover:scale-105 shadow-md"
          >
            Login
          </a>
          <a
            href="/awards"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-white text-lg sm:text-xl py-3 px-5 rounded-lg text-center transition-all transform hover:scale-105 shadow-md"
          >
            Awards
          </a>
        </div>
      </div>

      <footer className="absolute bottom-4 w-full text-center text-gray-300 text-sm">
        © 2024 Football App. All rights reserved.
      </footer>
    </div>
  );
}
