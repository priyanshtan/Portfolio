import React from "react";
import { FaAws } from "react-icons/fa";
import { LiaSalesforce } from "react-icons/lia";
function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I am Priyansh, a passionate Web developer with a keen eye for
          MERN Stack. With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <ul className="list-disc ml-5">
          <li>
            I have completed my High School from Chhaya Public School (CBSE) in
            the year 2017 and scored 8.2 CGPA.
          </li>
          <li>
            I have completed my Intermediate from Chhaya Public School (CBSE)
            with Science Stream in the year 2019 and scored 75%.
          </li>
          <li>
            I have completed my Bachelor's of Technology(Computer Science) from
            Dr. APJ Abdul Kalam Technical University in the year 2024 and scored
            7.33 CGPA and passed with First Divison.
          </li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Languages: Java, JavaScript.
          <br />
          Technologies: NodeJS, Express, MongoDB, ReactJS, HTML,
          Bootstrap, Tailwind.
          <br />
          Developer Tools: VS Code, Eclipse IDE, Postman, Git, GitHub.
          <br />
          Database: MongoDB.
          <br />
          Soft Skills: Presentation, Planning, Organized, Creative
          Problem-Solving, Teamwork, Active Listening, Adaptability, Analytical
          Thinking, Excellent problem-solving skills, Effective communicator and
          collaborator.
        </span>
        <br />
        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <a
                href="https://www.credly.com/badges/b8543073-54f4-4de8-974a-2d68a357dc57/public_url"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <FaAws className="text-2xl cursor-pointer" />
                <span>
                  AWS Academy Graduate - AWS Academy Cloud Architecting
                </span>
              </a>
              
            </li>
            <li>
              <a
                href="https://www.salesforce.com/trailblazer/ptanwar9998"
                target="_blank"
                className="flex items-center space-x-2"

              >
                <LiaSalesforce className="text-2xl cursor-pointer" />
                <span>
                  SalesForce (Mountaineer)
                </span>
              </a>
            </li>
            
          </ul>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative solutions that exceed client expectations and contribute
          positively to the digital landscape. I am committed to continuous
          learning and growth, always seeking new challenges and opportunities
          to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
