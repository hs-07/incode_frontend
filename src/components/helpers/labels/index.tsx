import React from "react";

interface LabelProps {
  name: string;
  url: string;
  className?: string;
  src: string;
}

const index: React.FC<LabelProps> = ({ name, url, className, src }) => {
  return (
    <a href={url} className="">
      <div className="flex justify-between items-center border border-gray-200 rounded-xl p-2 cursor-pointer hover:bg-gray-100">
        <div className="flex">
          <img src={src} alt="" className={`pr-3 ${className}`} />
          <h1 className="text-gray-500">{name}</h1>
        </div>
        <img src="/assets/icons/right-light.svg" alt="" />
      </div>
    </a>
  );
};

export default index;
