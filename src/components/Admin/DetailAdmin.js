import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layouts from "../Layouts/Layouts";

const DetailAdmin = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isLoadingAkun, setIsLoadingAkun] = useState(false);
  const [dataAkun, setDataAkun] = useState([]);

  const data = () => {
    setIsLoadingAkun(true);
    axios
      .get(`http://127.0.0.1:8000/api/auth/detailadmin/${params.id}`, {
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

  useEffect(() => {
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
          <h1 className="font-secular text-3xl mb-7">Detail Admin</h1>
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
              <div className="flex mb-5 flex-col md:flex-row items-center text-center md:text-left">
                <img src="../profile.png" width="100px" />
                {dataAkun.map((items, i) => (
                  <div key={i} className="mt-5 md:mt-0 md:ml-4">
                    <h5>
                      <span className="mb-2 text-xl font-bold tracking-tight text-gray-900 drk:text-white"> {items.name} </span> ( {items.username} ){" "}
                    </h5>
                    <p className="font-normal text-gray-700 drk:text-gray-400 mt-1">Contact : {items.email}</p>
                  </div>
                ))}
              </div>
            )}

            <Link
              to="/admin"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 drk:bg-blue-600 drk:hover:bg-blue-700 focus:outline-none drk:focus:ring-blue-800 inline-flex items-center mt-5"
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

export default DetailAdmin;
