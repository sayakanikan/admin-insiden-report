import React from "react";

const Skeleton = (props) => {
  console.log(props.jumlah);

  const load = () => {
    for (let i = 0; i < props.jumlah; i++) {
      console.log("halo semua");
      <td className="py-4 px-6">
        <div role="status" className="max-w-sm animate-pulse">
          <div className="h-2 bg-gray-200 rounded-full drk:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </td>;
    }
  };
  return (
    <tbody>
      <tr className="bg-white border-b drk:bg-gray-800 drk:border-gray-700">{load()}</tr>
    </tbody>
  );
};

export default Skeleton;
