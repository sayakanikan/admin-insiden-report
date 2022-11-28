import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layouts from "../Layouts/Layouts";

const DetailUser = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAkun, setIsLoadingAkun] = useState(false);
  const [dataAkun, setDataAkun] = useState([]);
  const [dataLaporan, setDataLaporan] = useState([]);

  const data = () => {
    setIsLoadingAkun(true);
    axios
      .get(`http://127.0.0.1:8000/api/auth/detailuser/${params.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((data) => {
        setIsLoadingAkun(false);
        // console.log(data);
        setDataAkun(data.data.data);
      })
      .catch((err) => {
        setIsLoadingAkun(false);
        console.log(err);
      });
  };

  const laporan = () => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/auth/history/${params.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((data) => {
        setDataLaporan(data.data.laporan);
        // console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response.statusText);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/");
    }
    data();
    laporan();
  }, []);

  return (
    <Layouts>
      <div className="w-[86%] md:w-screen">
        <div className="w-full min-h-[89vh] md:h-full px-7 md:px-10 py-7 bg-gray-50 drk:bg-slate-700">
          <h1 className="font-secular text-3xl mb-7">Detail User</h1>
          {/* Card */}
          <div className="block md:w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md drk:bg-gray-800 drk:border-gray-700">
            {isLoadingAkun ? (
              <div role="status" className="animate-pulse drk:border-gray-700">
                <div className="flex items-center space-x-3">
                  <svg className="w-20 h-20 text-gray-200 drk:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded-full drk:bg-gray-700 w-32 mb-4"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full drk:bg-gray-700"></div>
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div className="flex items-center">
                <img src="../profile.png" width="100px" />
                {dataAkun.map((items, i) => (
                  <div key={i} className="ml-4">
                    <h5>
                      <span className="mb-2 text-xl font-bold tracking-tight text-gray-900 drk:text-white">{items.name}</span> ( {items.username} ){" "}
                    </h5>
                    <p className="font-normal text-gray-700 drk:text-gray-400 mt-1">Contact : {items.email}</p>
                  </div>
                ))}
              </div>
            )}

            <hr className="my-7 h-px bg-gray-300 border-0 drk:bg-gray-700" />
            <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900 drk:text-white"> Riwayat Laporan </h5>

            {/* Table */}
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mb-5">
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

                {isLoading ? (
                  <tbody>
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
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    {dataLaporan.map((items, i) => (
                      <tr className="bg-white border-b drk:bg-gray-800 drk:border-gray-700" key={i}>
                        <td className="py-4 px-6">{i + 1}</td>
                        <td className="py-4 px-6">{items.laporan}</td>
                        <td className="py-4 px-6">{items.created_at}</td>
                        <td className="py-4 px-6">{items.status ? "Selesai" : "Perlu Tindakan"}</td>
                        <td className="py-4 px-6">
                          <Link
                            to={`/laporan/${items.id}`}
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
                    ))}
                  </tbody>
                )}
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
