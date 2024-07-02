import React from "react";
import hostelPro from "../assets/hostelPro.png";
import bloodBank from "../assets/bloodBank.png";
import pocketPal from "../assets/pocketPal.png";
import campusCompanion from "../assets/campusCompanion.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: hostelPro,
      text: "VIT Hostel-Pro",
      link: "https://hostel-pro.vercel.app/" // Add your link here
    },
    {
      id: 2,
      src: bloodBank,
      text: "Blood-Bank App",
      link: "https://blood-bank-app-client.vercel.app/login" // Add your link here
    },
    {
      id: 3,
      src: pocketPal,
      text: "Pocket-Pal",
      link: "https://pocket-pal-frontend.vercel.app/" // Add your link here
    },
    {
      id: 4,
      src: campusCompanion,
      text: "Campus-Companion- A Virtual University",
      link: "https://campus-companion-ww3uof.flutterflow.app/" // Add your link here
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black via-black to-amber-600 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-16">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-16">
          {portfolios.map(({ id, src, text, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt={text}
                  className="rounded-md duration-200 hover:scale-105 w-full h-44"
                />
                <p className="text-center font-bold py-2">{text}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
