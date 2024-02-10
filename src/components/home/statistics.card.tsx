import React from "react";

interface CardProps {
  title: string;
  value: string;
}

const StatisticsCard: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="bg-transparent border-white border-2 flex flex-col items-stretch px-10 py-7 rounded-xl flex-1 max-md:px-5">
      <div className="text-white">{value}</div>
      <div className="text-gray-400 text-sm">{title}</div>
    </div>
  );
};

export default StatisticsCard;
