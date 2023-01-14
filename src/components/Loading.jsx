import React from "react";
import { LineWave } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className=" flex justify-center items-center">
      <LineWave color="#00BFF" height={550} width={80} />
    </div>
  );
};

export default Loading;
