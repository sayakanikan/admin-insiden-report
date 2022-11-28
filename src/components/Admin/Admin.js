import React, { useState, useEffect } from "react";
import Layouts from "../Layouts/Layouts";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SuccessMessage from "../SuccessMessage";
import ErrorMessage from "../ErrorMessage";
import Modal from "../Modal";

const Admin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [dataAdmin, setDataAdmin] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const data = () => {
    setIsLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/auth/getadmin", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((data) => {
        // if (data.data.data.role_id === 0) {
        // }
        setDataAdmin(data.data.data);
        // console.log(dataAdmin);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response.statusText);
        setIsLoading(false);
      });
  };

  const handleDelete = (id, event) => {
    event.preventDefault();
    setShow(false);
    axios
      .delete(`http://127.0.0.1:8000/api/auth/deleteuser/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then(() => {
        data();
        setError("Akun Berhasil Dihapus!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
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
          <h1 className="font-secular text-3xl mb-7">Akun Admin</h1>
          {/* Add & Search Input */}
          <div className="flex mb-4 justify-between">
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 mt-3 pl-3 pointer-events-none text-slate-600 drk:text-white">
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

            <Link
              to="/admin/add"
              className="relative items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white drk:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 drk:focus:ring-cyan-800 hidden md:inline-flex"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white drk:bg-gray-900 rounded-md group-hover:bg-opacity-0">Tambah Admin</span>
            </Link>

            <Link
              to="/admin/add"
              className="relative items-center justify-center py-3 px-4 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white drk:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 drk:focus:ring-cyan-800 inline-flex md:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus inline md:hidden" viewBox="0 0 16 16">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
              </svg>
            </Link>
          </div>

          {/* {location.state.message ? "ada" : "gaada"} */}

          <ErrorMessage error={error} />
          {/* Table */}
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg mb-5">
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
                    Laporan Terselesaikan
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
                  {dataAdmin.map((items, i) => (
                    <tr className="bg-white border-b drk:bg-gray-800 drk:border-gray-700" key={i}>
                      <td className="py-4 px-6">{i + 1}</td>
                      <td className="py-4 px-6">{items.name}</td>
                      <td className="py-4 px-6">{items.email}</td>
                      {/* <td className="py-4 px-6">{items.laporan.length}</td> */}
                      <td className="py-4 px-6 flex items-center">
                        <Link
                          to={`/admin/detail/${items.id}`}
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 py-2.5 mr-2 mb-2 drk:bg-blue-600 drk:hover:bg-blue-700 focus:outline-none drk:focus:ring-blue-800"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                        </Link>
                        <Link
                          to={`/admin/update/${items.id}`}
                          type="button"
                          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-3 py-2.5 mr-2 mb-2 drk:focus:ring-yellow-900"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                          </svg>
                        </Link>

                        <button
                          onClick={() => {
                            setShow(true);
                            setId(items.id);
                          }}
                          type="button"
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 drk:bg-red-600 drk:hover:bg-red-700 drk:focus:ring-red-900"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fillRule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
      <Modal onClose={() => setShow(false)} show={show} pertanyaan="Anda yakin akan menghapus akun ini?" jawaban="Hapus" warna="bg-red-600 hover:bg-red-800 focus:ring-red-300" click={(e) => handleDelete(id, e)} />
    </Layouts>
  );
};

export default Admin;
