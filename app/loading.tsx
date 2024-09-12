"use client";
import React from "react";
import { Bars } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="loader">
      <Bars height="80" width="80" color="#0044ad" ariaLabel="bars-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    </div>
  );
};

export default loading;
