import React from 'react'

const Form = () => {
  return (
    <>
      <form>
        <div className="form-group py-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group py-3">
          <label htmlFor="activity">Activity</label>
          <select className="form-control" id="activity">
            <option value="">Select activity</option>
            <option value="Cycle">Cycle</option>
            <option value="Walk">Walk</option>
            <option value="Hike">Hike</option>
            <option value="Swim">Swim</option>
            <option value="Run">Run</option>
            <option value="Ride">Ride</option>
          </select>
        </div>
        <div className="form-group py-3">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            className="form-control"
            id="duration"
            placeholder="Enter duration"
          />
        </div>
        <div className="form-group py-3">
          <label htmlFor="datetime">Date & Time</label>
          <input type="datetime-local" className="form-control" id="datetime" />
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form