import React from "react";
import Navbar from "./Navbar";
import Sidebar from "../Sidebar";

const Layouts = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layouts;
