import React from "react";
import Card from "./Card";
import Table from "./Table";
import Sidebar from "./Sidebar";
import Formmodal from "./EditModal";

const Exercise = () => {
  return (
    <>
      <Sidebar />
      <div style={{ marginTop: "6rem" }} className="container">
        <div className="row">
          <Card />
          <Formmodal />
        </div>
        <Table />
      </div>
    </>
  );
};

export default Exercise;
