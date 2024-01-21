import { logDOM } from "@testing-library/react";
import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchInput = ({onSearch}) => {
  const [searchVal,setSearchVal] = useState('');
  // const inputRef = useRef();
  const searchHandler = (e)=>{
    const val = e.target.value;
    setSearchVal(e.target.value);
  }
  const submitHandler = ()=>{
    // console.log(searchVal);
    onSearch(searchVal);
  }
  // console.log(searchVal);
  return (
    <div className="w-[250px] sm:w-[350px] flex items-center justify-between bg-white px-4 py-2 rounded-full shadow-xl">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search GST Number"
        className="w-[90%] text-gray-600 outline-none"
        onChange={searchHandler}
      />
    <FaSearch size={'17px'} className="cursor-pointer" onClick={submitHandler}/>
    </div>
  );
};

export default SearchInput;
