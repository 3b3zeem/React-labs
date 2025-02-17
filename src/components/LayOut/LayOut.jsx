import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import useWindowSize from "./../../hook/useWindowSize";

const LayOut = () => {
  const { width, height } = useWindowSize();
  return (
    <React.Fragment>
      <Navbar />
      <div className="d-flex gap-5 justify-content-center mt-3">
        <p><b>Width:</b> {width}px</p>
        <p><b>Height:</b> {height}px</p>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default LayOut;
