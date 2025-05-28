import React from "react";
import rent from "../../public/rent.png";
import express from "../../public/express.png";
import logo from "../../public/logo.png";
import weather from "../../public/weather.jpg"

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: rent,
      name: "Car Rental System",
      link: "https://github.com/priyanshtan/Car_Rental_System.git",
      description:
        "Developed a mini project: a comprehensive car rental management system in Java, utilizing object-oriented programming principles for robust and maintainable code. The system covers customer management, vehicle tracking, and reservations.",
    },
    {
      id: 3,
      logo: logo,
      name: "myStore",
      link: "https://github.com/priyanshtan/e-Commerce.git",
      description:
        "Developed a fully functional full-stack E-Commerce website using the MERN stack — MongoDB, Express.js, React, and Node.js. Implemented secure user authentication and authorization using JWT and bcrypt, enabling user registration, login, and role-based access. Designed and integrated RESTful APIs with Express and Node.js to handle product listings, cart management, order processing, and payment workflows. Utilized MongoDB to store and manage user data, product details, and order history with efficient schema design. The React-based frontend delivers a responsive, dynamic shopping experience with real-time updates, product filtering, and client-side routing using React Router. Emphasized performance optimization, clean UI design, and seamless frontend-backend integration to provide a smooth and scalable user experience..",
    },
    {
      id: 2,
      logo: express,
      name: "College Management System",
      link: "",
      description:
        "Currently working on a full-stack college management system using Node.js, Express, MongoDB, and Vue.js. The system includes student records, course registrations, attendance, and faculty management, along with a payment gateway integration. Node.js and Express handle the backend with RESTful APIs, while MongoDB securely stores academic data. The Vue.js frontend offers a responsive and interactive user interface. This project demonstrates expertise in modern web development, ensuring efficient data handling, a seamless user experience, and maintainable code.",
    },
    {
      id: 4,
      logo: weather,
      name: "Weather App",
      link: "https://github.com/priyanshtan/WeatherApp.git",
      description:
        "Created a responsive and user-friendly weather application using HTML, CSS, and JavaScript, which fetches real-time weather data from the OpenWeatherMap API. The app displays current temperature, humidity, wind speed, and weather conditions based on user location or searched city. Implemented asynchronous JavaScript with fetch API for smooth data handling and used dynamic DOM manipulation to update UI elements. The application features error handling for invalid inputs and network issues, mobile-first responsive design, and intuitive icons to visually represent weather conditions. Designed with clean and modern UI principles to ensure a seamless user experience across devices..",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-10">
          {cardItem.map(({ id, logo, name, link, description }) => (
            <div
              className="md:w-[300px] border-[5px] rounded-lg shadow-lg p-4 flex flex-col justify-between cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <div className="flex flex-col items-center">
                <img
                  src={logo}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mb-4"
                  alt={name}
                />
                <div className="text-center">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                {link ? (
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                    onClick={() => window.open(link, "_blank")}
                  >
                    Source code
                  </button>
                ) : (
                  <button
                    className="bg-gray-500 text-white font-bold px-4 py-2 rounded"
                    disabled
                  >
                    Source code
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
