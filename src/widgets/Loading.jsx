import React from "react";
import ReactLoading from "react-loading";
const Loading = ({ type, color }) => {
  return (
    <div className="flex  justify-center mt-[20%] ">
      <ReactLoading type={type} color={color} height={"5%"} width={"5%"} />
    </div>
  );
};

export default Loading;
