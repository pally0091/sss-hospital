import React from "react";
import avaterP from "../images/avaterP.jpg";

const Patient = () => {
  return (
    <div className="flex flex-row py-5 gap-5 px-[5%] bg-gradient-to-t from-sky-400 to-white justify-between">
      <card className="w-1/3 p-3 m-2 border-2 border-black rounded-md">
        <div className="w-1/4 mx-auto rounded-full p-2 border-2">
          <img
            className="w-full h-full rounded-full"
            src={avaterP}
            alt="P"
          ></img>
        </div>
        <h4 className="text-xl ">Jonas Ben</h4>
        <p>"Amazing care and facilities at XYZ Hospital. Highly recommend!"</p>
      </card>
      <card className="w-1/3 p-3 m-2 border-2 border-black rounded-md">
        <div className="w-1/4 mx-auto rounded-full p-2 border-2">
          <img
            className="w-full h-full rounded-full"
            src={avaterP}
            alt="P"
          ></img>
        </div>
        <h4 className="text-xl ">Jonas Ben</h4>
        <p>"Amazing care and facilities at XYZ Hospital. Highly recommend!"</p>
      </card>
      <card className="w-1/3 p-3 m-2 border-2 border-black rounded-md">
        <div className="w-1/4 mx-auto rounded-full p-2 border-2">
          <img
            className="w-full h-full rounded-full"
            src={avaterP}
            alt="P"
          ></img>
        </div>
        <h4 className="text-xl ">Jonas Ben</h4>
        <p>"Amazing care and facilities at XYZ Hospital. Highly recommend!"</p>
      </card>
    </div>
  );
};

export default Patient;
