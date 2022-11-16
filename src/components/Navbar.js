import React from "react";

const Navbar = () => {
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
          <div>Jese Leos</div>
        </div>
        <img class="w-8 h-8 md:w-10 md:h-10 rounded-full text-sm md:text-md" src="profile.png" alt="Rounded avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
