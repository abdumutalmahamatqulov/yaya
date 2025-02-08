import React from "react";
import machalka from "../assets/0b577468487bf923724c93ad5f6108e0.png"
import { useNavigate } from "react-router-dom";

const Asosiy = () => {
  const navigate = useNavigate();

  const handleButtoClick = () => 
    {
      navigate("/home/catalog");
    }
  return (
    <div className="max-w-6xl mx-auto h-[760px] flex justify-between items-center">
      <div className="flex items-center justify-center w-full gap-4">
        <div className="bg-img">
          
        </div>
        <div className="text-left Oswald  w-[596px] ml-[-40px]">
          <p className="text-[120px]  font-[700] leading-[120px] text-black">ULGURGI NARXLARDA</p>
          <p className="text-[120px]  font-[700] leading-[120px] text-blue-500 mt-2">VOSITALAR</p>
          <button onClick={handleButtoClick} className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600">Buyurtma berish</button>
        </div>
        <div className=" w-[660px] h-[600px]">
          <img src={machalka} alt="Vositalar" className="w-full h-full  " />
        </div>
      </div>
    </div>
  );
};

export default Asosiy;
