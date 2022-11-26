import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import axios from "axios";

export const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataLaporan, setDataLaporan] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const navigate = useNavigate();

  const data = () => {
    setIsLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/auth/laporan", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((data) => {
        setDataLaporan(data.data.laporan);
        // console.log(data.data.laporan);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response.statusText);
        setIsLoading(false);
      });
  };

  const dataAcc = () => {
    setIsLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/auth/getuser", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((data) => {
        setDataUser(data.data.data);
        // console.log(data.data.data);
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
    dataAcc();
  }, []);

  return (
    <Layouts>
      <div className="w-screen">
        <div className="lg:w-full xl:w-content min-h-[89vh] md:h-full px-7 md:px-10 py-7 bg-gray-50 drk:bg-slate-700">
          <h1 className="font-secular text-3xl md:text-2xl lg:text-3xl mb-7">Dashboard</h1>
          {/* Card*/}
          <div className="max-w-full max-h-fit flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-8 mb-7">
            <div className="min-w-full sm:min-w-0 md:w-60 h-24 bg-blue-600 rounded-md p-3 flex">
              <div className="bg-white w-20 rounded min-h-full flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-file-earmark-text m-auto" viewBox="0 0 16 16">
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
              </div>
              <div className="my-auto ml-3">
                <h6 className="text-white font-normal">Laporan Masuk</h6>
                {isLoading ? (
                  <div role="status" className="max-w-sm animate-pulse mt-3">
                    <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <p className="text-white font-bold text-xl">{dataLaporan.filter((items) => {return items.status === 0}).length}</p>
                )}
              </div>
            </div>
            <div className="min-w-full sm:min-w-0 md:w-60 h-24 bg-blue-600 rounded-md p-3 flex">
              <div className="bg-white w-20 rounded min-h-full flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-file-earmark-check m-auto" viewBox="0 0 16 16">
                  <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
              </div>
              <div className="my-auto ml-3">
                <h6 className="text-white font-normal">Laporan Selesai</h6>
                {isLoading ? (
                  <div role="status" className="max-w-sm animate-pulse mt-3">
                    <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <p className="text-white font-bold text-xl">{dataLaporan.filter((items) => {return items.status === 1}).length}</p>
                )}
              </div>
            </div>
            <div className="min-w-full sm:min-w-0 md:w-60 h-24 bg-blue-600 rounded-md p-3 flex">
              <div className="bg-white w-20 rounded min-h-full flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-files m-auto" viewBox="0 0 16 16">
                  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                </svg>
              </div>
              <div className="my-auto ml-3">
                <h6 className="text-white font-normal">Total Laporan</h6>
                {isLoading ? (
                  <div role="status" className="max-w-sm animate-pulse mt-3">
                    <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <p className="text-white font-bold text-xl">{dataLaporan.length}</p>
                )}
              </div>
            </div>
            <div className="min-w-full sm:min-w-0 md:w-60 h-24 bg-blue-600 rounded-md p-3 flex">
              <div className="bg-white w-20 rounded min-h-full flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-people m-auto" viewBox="0 0 16 16">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                </svg>
              </div>
              <div className="my-auto ml-3">
                <h6 className="text-white font-normal">Users</h6>
                {isLoading ? (
                  <div role="status" className="max-w-sm animate-pulse mt-3">
                    <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <p className="text-white font-bold text-xl">{dataUser.length}</p>
                )}
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="min-w-full max-h-fit py-4 px-6 border-2 border-blue-600 hover:bg-blue-600 group  rounded-md transition-all">
            <h6 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-white">Selamat datang pada halaman admin!</h6>
            <p className="text-slate-600 group-hover:text-white">
              Halaman ini merupakan halaman administrator dari aplikasi "Insident Report", anda sekarang adalah admin yang dapat mengakses semua laporan, dan verifikasi laporan yang dibuat oleh user!
            </p>
            <hr className="my-3 h-px bg-blue-600 border-0 group-hover:bg-white drk:bg-gray-700 transition-all" />
            <p className="text-slate-600 group-hover:text-white">Gunakan halaman admin ini dengan bijak!</p>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Dashboard;
