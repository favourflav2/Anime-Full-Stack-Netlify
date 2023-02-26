import React from "react";
import { Link } from "react-router-dom";

export default function SmallAnimeCard({ title, image,score,url }) {
  //console.log(title)
  return (
    <div className="container_">
      <div className="card_ w-[220px] h-[420px] ">

      <div className="flex flex-col justify-center">
          <div >
            <img
              className="w-full h-[200px] lg:h-[250px] rounded-2xl hover:opacity-30"
              src={image?.jpg?.default}
              alt={title?.default}
            />
            
          </div>
          <div className="flex items-center justify-center mt-1">
          {title?.english ? <p className=" text-gray-200">{title.english}</p>:<p className=" text-gray-200">{title.default}</p>}
          </div>

          <div>
          {score ? (
              <p className="flex items-center justify-center mt-1">
                <span className=" font-extrabold text-green-400">Rating:</span> <span className=" text-gray-200">{score}</span>
              </p>
            ) : (
                <p className="flex items-center justify-center mt-1"><span className=" font-extrabold text-green-400">Rating:</span>  N/A</p>
            )}
          </div>
          
          <div className=" flex items-center justify-center cursor-pointer mt-3">
            <button><Link to={url} target='_blank'>Read More...</Link></button>
          </div>
          
        </div>
        
      </div>

      
    </div>
  );
}
