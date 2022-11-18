import React from "react";
import { useParams } from "react-router-dom";
import Layouts from "../Layouts";

const DetailAdmin = () => {
  const params = useParams();
  return (
    <Layouts>
      <div className="w-screen">
        <div className="w-full min-h-[89vh] md:h-full px-7 md:px-10 py-7 bg-gray-50 drk:bg-slate-700">
          <h1 className="font-secular text-3xl mb-7">Detail Admin</h1>
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
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default DetailAdmin;
