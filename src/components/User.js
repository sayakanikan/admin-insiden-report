import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const User = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full md:w-[81%] px-7 md:px-10 py-7 bg-gray-50 drk:bg-slate-700">
          <h1 className="font-secular text-3xl mb-7">Akun User</h1>
          {/* Search Input */}
          <div className="relative mb-4">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-slate-600 drk:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 pl-10 p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:placeholder-gray-400 drk:text-white drk:focus:ring-blue-500 drk:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
          {/* Table */}
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg mr-14 md:mr-0">
            <table className="w-full text-sm text-left text-gray-500 drk:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 drk:bg-gray-700 drk:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    No
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Nama
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Email
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Jumlah Laporan
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Tanggal Terakhir Lapor
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b drk:bg-gray-800 drk:border-gray-700">
                  <td className="py-4 px-6">1</td>
                  <td className="py-4 px-6">Ali</td>
                  <td className="py-4 px-6">ali@gmail.com</td>
                  <td className="py-4 px-6">5</td>
                  <td className="py-4 px-6">22/10/2022</td>
                  <td className="py-4 px-6">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 py-2.5 mr-2 mb-2 drk:bg-blue-600 drk:hover:bg-blue-700 focus:outline-none drk:focus:ring-blue-800"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
