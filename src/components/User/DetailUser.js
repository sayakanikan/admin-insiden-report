import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layouts from "../Layouts";

const DetailUser = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  // const data = () => {
  //   setIsLoading(true);
  //   axios
  //     .get("https://api-coba1.herokuapp.com/api/alluser")
  //     .then((data) => {
  //       console.log(data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.statusText);
  //       setIsLoading(false);
  //     });
  // };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      // data();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layouts>
      <div className="w-[86%] md:w-screen">
        <div className="w-full min-h-[89vh] md:h-full px-7 md:px-10 py-7 bg-gray-50 drk:bg-slate-700">
          <h1 className="font-secular text-3xl mb-7">Detail User</h1>
          {/* Card */}
          <div className="block md:w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 drk:bg-gray-800 drk:border-gray-700 drk:hover:bg-gray-700 group">
            <div className="flex">
              <img src="profile.png" width="100px" />
              <div>
                <h5>
                  <span className="mb-2 text-xl font-bold tracking-tight text-gray-900 drk:text-white"> Jese Leos </span> ( sayakanikan ){" "}
                </h5>
                <p className="font-normal text-gray-700 drk:text-gray-400 mt-1">Contact : email@gmail.com</p>
              </div>
            </div>

            <hr className="my-7 h-px bg-gray-300 border-0 drk:bg-gray-700" />
            <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900 drk:text-white"> Riwayat Laporan </h5>

            {/* Table */}
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mb-5">
              <table className="w-full text-sm text-left text-gray-500 drk:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 group-hover:bg-gray-200 drk:bg-gray-700 drk:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      No
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Laporan
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Tanggal Lapor
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Status
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
                    <tr className="bg-white group-hover:bg-gray-50 border-b drk:bg-gray-800 drk:border-gray-700">
                      <td className="py-4 px-6">1</td>
                      <td className="py-4 px-6">Coba Ngelapor</td>
                      <td className="py-4 px-6">11/11/2022</td>
                      <td className="py-4 px-6">Perlu Tindakan</td>
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
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <Link
              to="/user"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 drk:bg-blue-600 drk:hover:bg-blue-700 focus:outline-none drk:focus:ring-blue-800 inline-flex"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left mr-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default DetailUser;
