import React from "react";

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
  return (
    <>
      {exercises.map((exercise, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div key={index} className="card mb-3">
            <div className="card-body text-center">
              <i className={exercise.icon}></i>
              <h5 className="card-title">{exercise.title}</h5>
              <p className="card-text">{exercise.duration}</p>
              <button className="btn btn-dark">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
