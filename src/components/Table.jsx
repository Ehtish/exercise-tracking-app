import React from "react";

const Table = () => {
  const exerciseData = [
    {
      id: 1,
      username: "Mark",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      duration: "20 min",
      date: "20-4-2022",
    },
    {
      id: 2,
      username: "Usman",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      duration: "25 min",
      date: "20-5-2022",
    },
    {
      id: 3,
      username: "Bunty",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      duration: "30 min",
      date: "25-4-2022",
    },
  ];
  return (
    <>
      <table class="table table-hover table-secondary mb-5">
        <thead>
          <tr>
            <th scope="col">S no</th>
            <th scope="col">Username</th>
            <th scope="col">Description</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {exerciseData.map((exercise) => (
            <tr key={exercise.id}>
              <th scope="row">{exercise.id}</th>
              <td>{exercise.username}</td>
              <td>{exercise.description}</td>
              <td>{exercise.duration}</td>
              <td>{exercise.date}</td>
              <td>
                <button className="btn btn-secondary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
