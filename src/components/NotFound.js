import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col drk:bg-slate-800">
      <div className="m-auto">
        <img src="nf.png" width="300px" className="m-auto" />
        <h1 className="text-3xl font-bold text-center drk:text-white">Eror 404</h1>
        <p className="text-center text-xl drk:text-white">The page you requested was not found</p>
        <Link to={"/dashboard"}>
          <p className="text-center mt-3 text-indigo-700 hover:text-indigo-900 drk:text-indigo-400 drk:hover:text-indigo-500">Back to dashboard</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
