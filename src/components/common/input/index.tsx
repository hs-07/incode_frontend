import React from "react";

interface InputProps {
  placeholder: string;
  src: string;
  className?: string;
}

const index: React.FC<InputProps> = ({ placeholder, src, className }) => {
  return (
    <div className={`flex items-center w-full ${className}`}>
      <img src={src} alt="" />
      <input
        type="text"
        placeholder={placeholder}
        name=""
        id=""
        className="focus:outline-none p-2 border-b border-gray-200 w-full"
      />
    </div>
  );
};

export default index;
