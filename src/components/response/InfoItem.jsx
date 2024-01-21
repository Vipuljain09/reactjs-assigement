import React from "react";

const InfoItem = ({title,value}) => {
  return (
    <div className="flex items-center sm:w-[40%] lg:w-[30%]">
      <div className="w-[0.10rem] h-12 bg-gray-300 mx-2"></div>
      <div className="flex flex-col text-xs items-start">
        <p className="text-gray-500">{title}</p>
        <p className="text-black text-base">{value}</p>
      </div>
    </div>
  );
};

export default InfoItem;
