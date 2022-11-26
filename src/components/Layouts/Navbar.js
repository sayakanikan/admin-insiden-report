import axios from "axios";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [akun, setAkun] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const data = () => {
    setIsLoading(true);
    axios
      .post(
        "http://127.0.0.1:8000/api/auth/user",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      )
      .then((data) => {
        setIsLoading(false);
        setAkun(data.data.data.name);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.response.statusText);
      });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <nav className="bg-white border-gray-200 pr-2 sm:pr-4 flex justify-between drk:bg-gray-900 drop-shadow-md drk:drop-shadow-xl">
      <div className="container flex flex-wrap justify-between items-center py-2.5 px-6 w-64 drk:bg-gray-900 h-[70px]">
        <span className="self-center align-middle text-xl lg:text-3xl font-semibold whitespace-nowrap drk:text-white font-secular my-auto hidden md:inline">Insident Report</span>
        <span className="self-center align-middle text-2xl md:text-xl lg:text-2xl font-semibold whitespace-nowrap drk:text-white font-secular inline md:hidden">IR</span>
      </div>
      {/* Welcome Name */}
      <div className="flex items-center space-x-4 mr-3 md:mr-8">
        <div className="font-medium drk:text-white text-right">
          <div className="text-xs md:text-sm text-gray-500 drk:text-gray-400">Welcome back!</div>
          {isLoading ? (
            <div role="status" className="max-w-sm animate-pulse mt-2">
              <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[300px] mb-2.5"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>{akun}</div>
          )}
        </div>
        <img className="w-8 h-8 md:w-10 md:h-10 rounded-full text-sm md:text-md" src="profile.png" alt="Avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
