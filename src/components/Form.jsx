import React from "react";
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
            {...register("datetime", { required: "Date & Time is requuired" })}
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
