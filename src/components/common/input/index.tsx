import React from "react";

interface InputProps {
  placeholder: string;
  src: string;
  className?: string;
  onChange: (name: string, value:string) => void;
  id: string;
  value: string;
  name: string;
}

const index: React.FC<InputProps> = ({ placeholder, src, className, id, onChange, value, name }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.name, event.target.value);
  };
  return (
    <div className={`flex items-center w-full ${className}`}>
      <img src={src} alt="" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        onChange={handleChange}
        className="focus:outline-none p-2 border-b border-gray-200 w-full"
      />
    </div>
  );
};

export default index;
