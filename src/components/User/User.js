import React, { useState, useEffect } from "react";
import Layouts from "../Layouts/Layouts";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const User = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const navigate = useNavigate();

  const data = () => {
    setIsLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/auth/getuser", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((data) => {
        // if (data.data.data.role_id === 0) {
        // }
        setDataUser(data.data.data);
        // console.log(dataUser);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response.statusText);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/");
    }
    data();
  }, []);

  return (
    <Layouts>
      <div className="w-[86%] md:w-screen">
        <div className="w-full min-h-[89vh] md:h-full px-7 md:px-10 py-7 bg-gray-50 drk:bg-slate-700">
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
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
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
                  {/* <th scope="col" className="py-3 px-6">
                    Jumlah Laporan
                  </th> */}
                  {/* <th scope="col" className="py-3 px-6">
                    Tanggal Terakhir Lapor
                  </th> */}
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
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {dataUser.map((items, i) => (
                    <tr className="bg-white border-b drk:bg-gray-800 drk:border-gray-700" key={i}>
                      <td className="py-4 px-6">{i + 1}</td>
                      <td className="py-4 px-6">{items.name}</td>
                      <td className="py-4 px-6">{items.email}</td>
                      {/* <td className="py-4 px-6">5</td> */}
                      {/* <td className="py-4 px-6">22/10/2022</td> */}
                      <td className="py-4 px-6">
                        <Link
                          to={`/user/${items.id}`}
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
        </div>
      </div>
    </Layouts>
  );
};

export default User;
