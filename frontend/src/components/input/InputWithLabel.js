"use client";

import React, { useRef, useState } from "react";

const InputWithLabel = ({ type, label, name }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    if (!isFocused) {
      setIsFocused(true);
    }
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleLabelClick = () => {
    if (!isFocused) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="w-full h-14 border-[2px] border-gray-200 rounded-lg relative focus-within:border-twitterColor transition-all transform duration-100 ease-in-out">
      <label
        onClick={handleLabelClick}
        className={`absolute left-1 transition-all transform duration-100 ease-in-out cursor-text ${
          !isFocused ? "text-gray-400" : "text-twitterColor"
        } ${isFocused || inputValue ? "top-0 text-xs " : "top-3 text-base "}`}
      >
        {label}
      </label>

      <div className="w-full px-2 py-1 mt-4">
        <input
          ref={inputRef}
          className="w-full block focus:outline-none"
          type={type}
          name={name}
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
