import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({title,url}) {


 

  return (
    <div
            data-te-chip-init
            data-te-ripple-init
            className="[word-wrap: break-word] my-3 mr-4 ml-4 flex h-[55px] cursor-pointer items-center justify-center rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] normal-case leading-loose  font-extrabold shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-400 text-gray-900 hover:bg-slate-200"
            data-te-close="true"
          >
            <Link to={url} target='_blank'>
            {title?.englsih ? <h4 className=" text-[15px] text-black">{title.english}</h4> : <h4 className=" text-[13px] text-black">{title.default}</h4>}
            </Link>
            
          
        </div>
  );
}
