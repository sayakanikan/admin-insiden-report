import React from "react";
import { useParams } from "react-router-dom";
import Layouts from "../Layouts";

const UpdateLaporan = () => {
  const params = useParams();
  return (
    <Layouts>
      <p>Update Laporan : {params.id}</p>
    </Layouts>
  );
};

export default UpdateLaporan;
