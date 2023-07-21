import React from "react";
import "../App.css";
import { useNavigate } from "react-router";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed min-h-screen w-full bg-[#5F224A] flex justify-center items-center">
      <div className="bg-white w-full max-w-[325px] rounded-lg p-5 flex flex-col items-center gap-5 by-5 shadow-lg">
        <h1 className="font-bold">CITIZEN ID</h1>
        <input className="bg-[#EBEBEB] pl-2 w-full" placeholder="Name"></input>
        <input
          className="bg-[#EBEBEB] pl-2 w-full"
          placeholder="Card ID"
        ></input>
        <button
          className="bg-[#5454c5] py-1 px-2 rounded-md shadow-md text-white"
          onClick={() => {
            navigate("/Info");
          }}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default Home;
