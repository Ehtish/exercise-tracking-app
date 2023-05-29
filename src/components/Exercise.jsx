import React from "react";
import Card from "./Card";
import Table from "./Table";
import Sidebar from "./Sidebar";
import EditModal from "./EditModal";

const Exercise = () => {
  return (
    <>
      <div style={{ marginTop: "6rem" }} className="container">
        <div className="row">
          <div className="col-2 ">
            <Sidebar />
          </div>
          <div className="col-9 ">
            <Card />
            <div className="table-responsive">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exercise;
