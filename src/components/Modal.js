import React from "react";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="absolute w-[86.8%] md:w-[85%] lg:w-[81%] left-16 md:ml-[8%] lg:ml-[14.3%] h-[calc(100vh-70px)] md:h-[calc(100vh-70px)] flex overflow-hidden">
      <div className="absolute w-full h-full bg-slate-900 opacity-50"></div>
      <div className="relative mt-48 mx-auto md:m-auto max-w-sm md:max-w-full h-full md:h-auto shadow-lg">
        <div className="relative bg-white rounded-lg shadow drk:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center drk:hover:bg-gray-800 drk:hover:text-white"
            onClick={props.onClose}
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <svg aria-hidden="true" className="mx-auto mb-4 w-14 h-14 text-gray-400 drk:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 drk:text-gray-400">{props.pertanyaan}</h3>
            <button
              onClick={props.click}
              type="button"
              className={`text-white  focus:ring-4 focus:outline-none drk:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 ${props.warna}`}
            >
              Ya, {props.jawaban}
            </button>
            <button
              onClick={props.onClose}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 drk:bg-gray-700 drk:text-gray-300 drk:border-gray-500 drk:hover:text-white drk:hover:bg-gray-600 drk:focus:ring-gray-600"
            >
              Tidak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
