import React from "react";
import ImportantInfoItem from "./ImportantInfoItem";
import { useSelector } from "react-redux";
import store from "../../store/appStore";
import NoResponseComp from "./NoResponseComp";
import DetailCard from "./DetailCard";


const ResponsePage = () => {
  const data = useSelector((store) => store.gstSearchSlice.data);

  if (data === null) return;
  if (data.length === 0) return <NoResponseComp />;

  return (
    <div className="flex flex-col items-center w-[70%] mx-auto my-2">
      <h1 className="text-2xl font-medium text-gray-800">Test Enterprises</h1>
      <p className="text-sm font-medium text-gray-500 my-1">{data.GSTIN}</p>

      {/* Below div contain the important deatils that shows on above card. */}
      <div className="hidden w-full sm:flex items-center justify-between my-4">
        <ImportantInfoItem
          title={"Registred On"}
          value={data["Date of Registration"]}
        />
        <ImportantInfoItem title={"GST Status"} value={data["GSTIN Status"]} />
        <ImportantInfoItem
          title={"Last Updated On"}
          value={data["Date of Registration"]}
        />
      </div>

      {/* It's the detail card of Bussinees related to search GST */}
      <DetailCard data={data}/>

    </div>
  );
};

export default ResponsePage;
