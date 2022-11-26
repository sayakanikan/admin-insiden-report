import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Modal from "../Modal";

const DetailLaporan = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLaporan, setDataLaporan] = useState([]);

  const data = () => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/auth/laporan/${params.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((data) => {
        setIsLoading(false);
        // console.log(data.data.laporan);
        setDataLaporan(data.data.laporan);
      })
      .catch((err) => {
        setIsLoading(false);
        // console.log(err);
      });
  };

  useEffect(() => {
    // setIsLoading(true);
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/");
    }
    data();
  }, []);

  return (
    <Layouts>
      <div className="w-screen">
        <div className="w-full min-h-[89vh] md:h-full px-7 md:px-10 py-7 bg-gray-50 drk:bg-slate-700">
          <h1 className="font-secular text-3xl mb-7">Detail Laporan</h1>
          {/* Card */}
          {isLoading ? (
            <div className="block md:w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md drk:bg-gray-800 drk:border-gray-700 md:mr-0">
              <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center mb-5">
                <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 drk:bg-gray-700">
                  <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                  </svg>
                </div>
                <div className="w-full">
                  <div className="h-2.5 bg-gray-200 rounded-full drk:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[480px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[440px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[460px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>

              <div className="flex justify-center md:justify-start">
                <Link
                  to="/laporan"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 drk:bg-blue-600 drk:hover:bg-blue-700 focus:outline-none drk:focus:ring-blue-800 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left mr-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                  </svg>
                  Kembali
                </Link>

                <button className="focus:outline-none text-white bg-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 drk:bg-slate-600 drk:hover:bg-slate-700 drk:focus:ring-slate-800 flex items-center" disabled>
                  <svg class="inline mr-3 w-5 h-5 text-gray-200 animate-spin drk:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  Loading
                </button>
              </div>
            </div>
          ) : (
            <div>
              {dataLaporan.map((items, i) => (
                <div className="block md:w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md drk:bg-gray-800 drk:border-gray-700 md:mr-0" key={i}>
                  <div className="flex mb-5 flex-col md:flex-row text-center md:text-left">
                    <img src={items.foto} width="200px" alt="Foto Laporan" className="mx-auto md:mx-0 md:mr-8 md:mb-5" />
                    <div>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 drk:text-white">Dilaporkan oleh {items.user_id}</h5>
                      <p className="font-semibold text-gray-700 drk:text-gray-400 mt-1">Laporan : {items.laporan}</p>
                      <p className="font-semibold text-gray-700 drk:text-gray-400 mt-1">Dilaporkan Tanggal : {items.created_at}</p>
                      {items.status ? <p className="font-bold text-green-700 drk:text-gray-400 mt-1">Status : Selesai</p> : <p className="font-bold text-red-700 drk:text-gray-400 mt-1">Status : Perlu Tindakan</p>}
                    </div>
                  </div>

                  <div className="flex justify-center md:justify-start">
                    <Link
                      to="/laporan"
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 drk:bg-blue-600 drk:hover:bg-blue-700 focus:outline-none drk:focus:ring-blue-800 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left mr-2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                      </svg>
                      Kembali
                    </Link>

                    {items.status ? (
                      <button className="focus:outline-none text-white bg-slate-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 drk:bg-slate-600 drk:hover:bg-slate-700 drk:focus:ring-slate-800 flex items-center" disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2-check mr-2" viewBox="0 0 16 16">
                          <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                          <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
                          <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z" />
                        </svg>
                        Sudah Verifikasi
                      </button>
                    ) : (
                      <button
                        onClick={() => setShow(true)}
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 drk:bg-green-600 drk:hover:bg-green-700 drk:focus:ring-green-800 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2-check mr-2" viewBox="0 0 16 16">
                          <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                          <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
                          <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z" />
                        </svg>
                        Verifikasi Selesai
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Modal onClose={() => setShow(false)} show={show} pertanyaan="Anda yakin akan menyelesaikan laporan masalah ini?" jawaban="Selesaikan" />
    </Layouts>
  );
};

export default DetailLaporan;
