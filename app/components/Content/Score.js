import React from "react";

const Score = ({ score }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;

  return (
    <div className="flex justify-center items-center">
      <div
        className="relative w-24 h-24 rounded-full bg-gray-200 
                   shadow-[10px_10px_20px_rgba(0,0,0,0.2),-10px_-10px_20px_rgba(255,255,255,0.7)] 
                   flex justify-center items-center"
      >
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle
            className="stroke-gray-300"
            strokeWidth="10"
            fill="none"
            r={radius}
            cx="60"
            cy="60"
          />
          {/* Progress Circle with Neomorphic Effect */}
          <circle
            className="stroke-blue-500"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            r={radius}
            cx="60"
            cy="60"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            style={{
              filter:
                "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2)) drop-shadow(-4px -4px 10px rgba(255, 255, 255, 0.7))",
            }}
          />
        </svg>
        {/* Score Text */}
        <div className="absolute text-2xl font-semibold text-gray-700">{score}%</div>
      </div>
    </div>
  );
};

export default Score;
