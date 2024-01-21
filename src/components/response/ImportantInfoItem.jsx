import React from "react";

const ImportantInfoItem = ({ title, value }) => {
  return (
    <p className="text-xs text-gray-500">
      <span className="font-semibold text-gray-700 ">{title}: </span>
      {value}
    </p>
  );
};

export default ImportantInfoItem;
               
