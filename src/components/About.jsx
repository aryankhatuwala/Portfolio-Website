import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-amber-600 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

         <p className="text-xl">
          I am a third-year student at Vellore Institute of Technology (VIT), Vellore, passionate about technology and software development. My skill set includes proficiency in programming languages such as C++, Java, and C, along with a deep understanding of Data Structures and Algorithms.
        </p>
        <br />
        <p className="text-xl">
         As a full-stack developer, I have experience working with a wide range of technologies, including HTML, CSS, JavaScript, MongoDB, ExpressJS, ReactJS, NodeJS, as well as CSS frameworks like Tailwind CSS and Bootstrap. My knowledge extends to areas like SQL, operating systems, database systems, and computer networks, making me well-rounded in various aspects of computer science.
        </p>
        <br />
         <p className="text-xl">
         Currently, I am actively pursuing my AWS Cloud Practitioner certification to expand my cloud computing expertise. Throughout my academic journey, I have undertaken numerous projects, applying my skills to create practical solutions and gain hands-on experience in the field of technology.
        </p>
      </div>
    </div>
  );
};

export default About;