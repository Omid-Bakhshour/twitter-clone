"use client";

import React, { useState } from "react";

const InputWithLabel = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="w-full h-14 border-[2px] border-gray-200 rounded-lg relative focus-within:border-twitterColor transition-all transform duration-100 ease-in-out">
      <label
        className={`absolute left-1 transition-all transform duration-100 ease-in-out ${
          !isFocused ? "text-gray-400" : "text-twitterColor"
        } ${isFocused || inputValue ? "top-0 text-xs " : "top-3 text-base "}`}
      >
        Email
      </label>

      <div className="w-full px-2 py-1 mt-4">
        <input
          className="w-full block focus:outline-none"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
};

export default InputWithLabel;
