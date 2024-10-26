import React from "react";

const Button = ({ name, bgColor = "bg-yellow-500", ...props }) => {
  return (
    <button
      className={` py-1 duration-300 transition-colors px-3 rounded-md text-white ${bgColor}`}
      {...props}
    >
      {name}
    </button>
  );
};

export default Button;
