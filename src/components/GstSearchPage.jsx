import React from "react";
import SearchHeader from "./SearchHeader";
import ResponsePage from "./response/ResponsePage";

const GstSearchPage = () => {
  return (
    <div className="min-h-screen p-2">
      <div className="flex flex-col items-center min-h-[95vh] shadow-xl rounded-lg">
        <SearchHeader/>
        <ResponsePage/>
      </div>
    </div>
  );
};

export default GstSearchPage;
