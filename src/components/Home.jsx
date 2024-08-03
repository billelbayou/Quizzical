import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.StrictMode>
      <div className="text-white bg-slate-200 h-screen flex flex-col justify-center items-center bg-background bg-cover">
        <h1 className="text-6xl font-bold mb-3">Quizzical</h1>
        <p className="text-3xl">Crack the trivia and answer the riddles.</p>
        <Link
          to={"/main"}
          className="bg-white hover:bg-gray-100 text-xl mt-10 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow"
        >
          Start
        </Link>
      </div>
    </React.StrictMode>
  );
}
