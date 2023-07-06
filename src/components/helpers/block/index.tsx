import React from "react";
import { RadioButton } from "@/components/common";

const para = "Recommended price excluding possible toll roads and parking fee. Travel time ~ 30min. INSERT YOUR PRICE BELOW."

const index: React.FC = () => {
    
  return (
    <div className="flex flex-col px-8 py-2">
      <RadioButton />
      <div className="flex px-4 py-3 mt-4 rounded-md text-xs bg-[#D2FF81]">
        <p>{para}</p>
      </div>
    </div>
  );
};

export default index;
