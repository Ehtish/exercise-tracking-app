import React, { useState } from "react";
import EditModal from "./EditModal";

const Card = () => {
  const exercises = [
    {
      icon: "fa fa-bicycle fa-3x mb-3",
      title: "Cycling",
      duration: "Duration: 1 hour",
    },
    {
      icon: "fa fa-walking fa-3x mb-3",
      title: "Walking",
      duration: "Duration: 45 minutes",
    },
    {
      icon: "fa fa-hiking fa-3x mb-3",
      title: "Hiking",
      duration: "Duration: 30 minutes",
    },
    {
      icon: "fa fa-swimmer fa-3x mb-3",
      title: "Swimming",
      duration: "Duration: 15 minutes",
    },
    {
      icon: "fa fa-running fa-3x mb-3",
      title: "Running",
      duration: "Duration: 25 minutes",
    },
    {
      icon: "fa fa-motorcycle fa-3x mb-3",
      title: "Riding",
      duration: "Duration: 35 minutes",
    },
  ];

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    activity: "",
    duration: "",
  });
  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
  };

  

  return (
    <>
      {exercises.map((exercise, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className={exercise.icon}></i>
              <h5 className="card-title">{exercise.title}</h5>
              <p className="card-text">{exercise.duration}</p>
              <button className="btn btn-secondary" onClick={handleEditClick}>
                Edit
              </button>
              <button className="btn btn-primary">Preview</button>
            </div>
          </div>
        </div>
      ))}
      <EditModal open={isEditModalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default Card;
