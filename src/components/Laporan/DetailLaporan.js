import React from "react";
import { Link, useParams } from "react-router-dom";
import Layouts from "../Layouts";

const DetailLaporan = () => {
  const params = useParams();

  return (
    <Layouts>
      <div className="w-screen">
        <div className="w-full min-h-[89vh] md:h-full px-7 md:px-10 py-7 bg-gray-50 drk:bg-slate-700">
          <h1 className="font-secular text-3xl mb-7">Detail Laporan</h1>
          {/* Card */}
          <div className="block md:w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 drk:bg-gray-800 drk:border-gray-700 drk:hover:bg-gray-700 group md:mr-0">
            <div className="flex mb-5 flex-col md:flex-row text-center md:text-left">
              <img src="nf.png" width="200px" alt="Foto Laporan" className="mx-auto md:mx-0" />
              <div>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 drk:text-white">Dilaporkan oleh Jese Leos</h5>
                <p className="font-semibold text-gray-700 drk:text-gray-400 mt-1">Detail Laporan : Tembok Bolong</p>
                <p className="font-semibold text-gray-700 drk:text-gray-400 mt-1">Dilaporkan Tanggal : 11/11/2022</p>
                <p className="font-bold text-red-700 drk:text-gray-400 mt-1">Status : Perlu Tindakan</p>
              </div>
            </div>
            <div className="flex">
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
              <button
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 drk:bg-green-600 drk:hover:bg-green-700 drk:focus:ring-green-800 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2-check mr-2" viewBox="0 0 16 16">
                  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
                  <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z" />
                </svg>
                Verifikasi Selesai
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default DetailLaporan;
