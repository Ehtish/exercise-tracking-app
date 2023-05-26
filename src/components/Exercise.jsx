import React from "react";
import Card from "./Card";
import Table from "./Table";
import Sidebar from "./Sidebar";
const Exercise = () => {
  return (
    <>
      <Sidebar />
      <div style={{ marginTop: "6rem" }} className="container">
        <div className="row">
          <Card />
        </div>
        <Table />
      </div>
    </>
  );
};

export default Exercise;
