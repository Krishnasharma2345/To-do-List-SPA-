import React, { useRef } from "react";
import { useEffect } from "react";
import Lottie from "lottie-react";
import deleteAnimation from "./system-regular-39-trash-hover-trash-empty.json"; // Corrected import path

const Task_division = ({ formdata, handledelete }) => {
  const lottieRef = useRef(null);

  function cleardate(e) {
    let date = new Date(e);

    let year = Number(date.getFullYear());
    let month = Number(date.getMonth() + 1);
    let day = Number(date.getDate());

    console.log(year, month, day);
    return `${year} + ${month} + ${day}`;
  }

  const handleMouseEnter = () => {
    lottieRef.current.play();
  };

  const handleMouseLeave = () => {
    lottieRef.current.stop();
  };

  return (
    <div className="bg-green-400 rounded-2xl min-h-screen m-7 pt-4">
      {formdata.map((e) => (
        <div
          key={e.date}
          className="bg-zinc-600 font-semibold text-white p-3 rounded-lg m-3 mt-5 flex justify-between transition-all"
        >
          <div className="min-w-[50%] max-w-[50%]">{e.title}</div>
          <div>{cleardate(e.date)}</div>
          <button
            onClick={(i) => handledelete(e.date)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex items-center text-red-500"
          >
            <Lottie
              animationData={deleteAnimation}
              lottieRef={lottieRef}
              loop={false}
              style={{ width: 30, height: 30, color: "red" }} // Set size as needed
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Task_division;
