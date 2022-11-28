import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Active
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const handleSubmit = () => {
    setIsLoading(true);
    localStorage.clear();
    navigate("/");
    setIsLoading(false);
  };

  return (
    <aside className="w-30 md:min-w-max lg:w-80 relative" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-white drk:bg-gray-800 drop-shadow-xl h-full">
        <ul className="space-y-2">
          <li className={splitLocation[1] === "dashboard" ? "bg-blue-100 rounded-lg" : ""}>
            <Link to="/dashboard" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg drk:text-white hover:bg-blue-100 drk:hover:bg-gray-700">
              <svg
                className="w-7 h-7 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-500 transition duration-75 drk:text-gray-400 group-hover:text-gray-900 drk:group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
              <span className="hidden md:inline ml-3 text-sm md:text-md lg:text-base">Dashboard</span>
            </Link>
          </li>
          <li className={splitLocation[1] === "laporan" ? "bg-blue-100 rounded-lg" : ""}>
            <Link to="/laporan" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg drk:text-white hover:bg-blue-100 drk:hover:bg-gray-700">
              <svg
                className="flex-shrink-0 w-7 h-7 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-500 transition duration-75 drk:text-gray-400 group-hover:text-gray-900 drk:group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="hidden md:inline flex-1 ml-3 whitespace-nowrap text-sm md:text-md lg:text-base">Laporan</span>
            </Link>
          </li>
          <li className={splitLocation[1] === "user" ? "bg-blue-100 rounded-lg" : ""}>
            <Link to="/user" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg drk:text-white hover:bg-blue-100 drk:hover:bg-gray-700">
              <svg
                className="flex-shrink-0 w-7 h-7 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-500 transition duration-75 drk:text-gray-400 group-hover:text-gray-900 drk:group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="hidden md:inline flex-1 ml-3 whitespace-nowrap text-sm md:text-md lg:text-base">User</span>
            </Link>
          </li>
          <li className={splitLocation[1] === "admin" ? "bg-blue-100 rounded-lg" : ""}>
            <Link to="/admin" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg drk:text-white hover:bg-blue-100 drk:hover:bg-gray-700">
              <svg
                className="flex-shrink-0 w-7 h-7 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-500 transition duration-75 drk:text-gray-400 group-hover:text-gray-900 drk:group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="hidden md:inline flex-1 ml-3 whitespace-nowrap text-sm md:text-md lg:text-base">Admin</span>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 drk:border-gray-700">
          <li>
            {isLoading ? (
              <button
                disabled
                type="button"
                className="w-full text-white bg-slate-500 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 drk:bg-gray-800 drk:text-gray-400 drk:border-gray-600 drk:hover:text-white drk:hover:bg-gray-700"
              >
                <svg role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin drk:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  />
                </svg>
                Loading...
              </button>
            ) : (
              <button onClick={handleSubmit} className="flex items-center w-full text-left p-2 text-base font-normal text-gray-900 rounded-lg drk:text-white hover:bg-red-100 drk:hover:bg-gray-700">
                <svg
                  className="flex-shrink-0 w-7 h-7 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-500 transition duration-75 drk:text-gray-400 group-hover:text-gray-900 drk:group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden md:inline flex-1 ml-3 whitespace-nowrap text-sm md:text-md lg:text-base">Logout</span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
