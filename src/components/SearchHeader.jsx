import React from "react";
import IMG from "../gst-svg.svg";
import SearchInput from "./SearchInput";
import { useDispatch } from "react-redux";
import { updateGstSearchData } from "../store/gstSearchSlice";

const SearchHeader = () => {
  const dispatch = useDispatch();
  const SearchHandler = (gstNumber) => {
    dispatch(updateGstSearchData(gstNumber));
  };

  return (
    <div className="flex w-full bg-gradient-to-b from-blue-100 to-white rounded-lg">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:px-12 lg:px-24 w-[100%] lg:w-[70%] mx-auto mt-4">
        <div className="flex flex-col items-center gap-2 my-4">
          <h1 className="text-lg lg:text-2xl font-bold text-center">
            Search and Confirm GST Registration
          </h1>
          <h3 className="text-base lg:text-lg text-gray-700 font-[450] text-center">
            Quickly Verify GST Numbers with Confidence
          </h3>
          <SearchInput onSearch={SearchHandler} />
        </div>
        <img src={IMG} alt="logo" className="w-[200px] object-cover" />
      </div>
    </div>
  );
};

export default SearchHeader;
