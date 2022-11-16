import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-30 md:w-44 lg:w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-white drk:bg-gray-800 drop-shadow-xl h-full md:h-[calc(100vh-70px)]">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg drk:text-white hover:bg-gray-100 drk:hover:bg-gray-700">
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
          <li>
            <Link to="/laporan" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg drk:text-white hover:bg-gray-100 drk:hover:bg-gray-700">
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
          <li>
            <Link to="/user" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg drk:text-white hover:bg-gray-100 drk:hover:bg-gray-700">
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
          <li>
            <Link to="/admin" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg drk:text-white hover:bg-gray-100 drk:hover:bg-gray-700">
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
            <Link to="/logout" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg drk:text-white hover:bg-gray-100 drk:hover:bg-gray-700">
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
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
