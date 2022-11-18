import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layouts from "../Layouts";

const Laporan = () => {
  const [isLoading, setIsLoading] = useState(false);

  const data = () => {
    setIsLoading(true);
    axios
      .get("https://api-coba1.herokuapp.com/api/laporan")
      .then((data) => {
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response.statusText);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      data();
    });
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layouts>
      <div className="w-[86%] md:w-screen">
        <div className="w-full min-h-[89vh] md:h-full px-7 md:px-10 py-7 bg-gray-50 drk:bg-slate-700">
          <h1 className="font-secular text-3xl mb-7">Laporan Insiden</h1>
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
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
            <table className="w-full text-sm text-left text-gray-500 drk:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 drk:bg-gray-700 drk:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    No
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Laporan
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Pelapor
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Tanggal Lapor
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr className="bg-white border-b drk:bg-gray-800 drk:border-gray-700">
                    <td className="py-4 px-6">
                      <div role="status" className="max-w-sm animate-pulse">
                        <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div role="status" className="max-w-sm animate-pulse">
                        <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div role="status" className="max-w-sm animate-pulse">
                        <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div role="status" className="max-w-sm animate-pulse">
                        <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div role="status" className="max-w-sm animate-pulse">
                        <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div role="status" className="max-w-sm animate-pulse">
                        <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr className="bg-white border-b drk:bg-gray-800 drk:border-gray-700">
                    <td className="py-4 px-6">1</td>
                    <td className="py-4 px-6">Coba Ngelapor</td>
                    <td className="py-4 px-6">Ali</td>
                    <td className="py-4 px-6">Perlu Tindakan</td>
                    <td className="py-4 px-6">22/10/2022</td>
                    <td className="py-4 px-6">
                      <Link
                        to="/detailLaporan/1"
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 py-2.5 mr-2 mb-2 drk:bg-blue-600 drk:hover:bg-blue-700 focus:outline-none drk:focus:ring-blue-800"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                      </Link>
                      <Link
                        to="/updateLaporan/1"
                        type="button"
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-3 py-2.5 mr-2 mb-2 drk:focus:ring-yellow-900"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Laporan;
