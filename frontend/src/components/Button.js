import React from "react";

function Button({ image, text, textColor, customClass }) {
  return (
    <button
      className={` ${customClass} transition-colors transform duration-300 ease-in  w-[300px] h-10 flex justify-center items-center gap-2 rounded-full border border-gray-200 `}
    >
      {image}
      <span style={{ color: textColor }} className="font-bold text-base">
        {text}
      </span>
    </button>
  );
}

export default Button;
