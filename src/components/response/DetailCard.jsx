import React from "react";
import InfoItem from "./InfoItem";
import { IoMdCopy } from "react-icons/io";

const Line = () => {
  return <div className="h-[0.10rem] w-[100%] bg-gray-300 my-2"></div>;
};

const DetailCard = ({ data }) => {
  return (
    <div className="w-full flex flex-col items-start bg-gray-100 shadow-md rounded-md p-2">
      <p className="font-medium">Bussinees Details</p>
      <Line />
      <div className="w-[100%] flex flex-wrap gap-4 my-4">
        {Object.keys(data).map((key, idx) => (
          <InfoItem title={key} value={data[key]} key={idx} />
        ))}
      </div>
      <Line />
      <div className="w-100% flex flex-row-reverse">
        <p className="flex items-center gap-1 text-blue-400 font-medium text-sm px-2 py-1 border-2 border-blue-400 rounded-sm cursor-pointer">
          <IoMdCopy size={"20px"} />
          <span>Copy</span>
        </p>
      </div>
    </div>
  );
};

export default DetailCard;
