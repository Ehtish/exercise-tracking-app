import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  // validation on date
  // const currentDate = new Date().toISOString().split("T")[0]; // Get current date
  // const validateDateTime = (value) => {
  //   if (value <= currentDate) {
  //     return "Please select a future date and time";
  //   }
  //   return true;
  // };

  const [selectedDateTime, setSelectedDateTime] = useState("");

  const handleDateTimeChange = (event) => {
    setSelectedDateTime(event.target.value);
  };
  const validateDateTime = (value) => {
    const selectedDate = new Date(value);
    const currentDate = new Date();
    const nextYear = new Date(currentDate.getFullYear() + 1, 0, 1); // Get the first day of next year

    if (!value) {
      return "Date & Time is required";
    } else if (selectedDate < currentDate) {
      return "Please select a future date";
    } else if (selectedDate > nextYear) {
      return "Please select a date within the next year";
    }

    return true;
  };

  const currentDate = new Date().toISOString().slice(0, 16); // Get current date and time in the format "YYYY-MM-DDTHH:mm"
  const nextYear = new Date(new Date().getFullYear() + 1, 0, 1)
    .toISOString()
    .slice(0, 16); // Get the first day of next year
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group py-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            {...register("username", {
              required: "Username is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Username must contain only alphabets",
              },
            })}
          />
          {errors.username && (
            <p className="text-danger">{errors.username.message}</p>
          )}
        </div>
        <div className="form-group py-3">
          <label htmlFor="activity">Activity</label>
          <select
            className="form-control"
            id="activity"
            {...register("activity", { required: "Activity is required" })}
          >
            <option value="">Select activity</option>
            <option value="Cycle">Cycle</option>
            <option value="Walk">Walk</option>
            <option value="Hike">Hike</option>
            <option value="Swim">Swim</option>
            <option value="Run">Run</option>
            <option value="Ride">Ride</option>
          </select>
          {errors.activity && (
            <p className="text-danger">{errors.activity.message}</p>
          )}
        </div>
        <div className="form-group py-3">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            className="form-control"
            id="duration"
            placeholder="Enter duration"
            {...register("duration", { required: "Duration is required" })}
          />
          {errors.duration && (
            <p className="text-danger">{errors.duration.message}</p>
          )}
        </div>
        <div className="form-group py-3">
          <label htmlFor="datetime">Date & Time</label>
          <input
            type="datetime-local"
            className="form-control"
            id="datetime"
            {...register("datetime", {
              required: "Date & Time is requuired",
              validate: validateDateTime,
            })}
            value={selectedDateTime}
            onChange={handleDateTimeChange}
            min={currentDate}
            max={nextYear}
          />
          {errors.datetime && (
            <p className="text-danger">{errors.datetime.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
