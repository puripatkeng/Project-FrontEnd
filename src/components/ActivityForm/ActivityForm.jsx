import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./ActivityForm.css";
// import List from "../ActivityList/ActivityList";
import { v4 as uid } from "uuid";

const AddActivity = ({ fetchData }) => {
  const defaultForm = {
    type: "",
    date: "",
    durations: "",
    calories: "",
    note: "",
  };
  const [form, setForm] = useState(defaultForm);

  const handleChange = (e) => {
    if (e.target.type === "number") {
      setForm({ ...form, [e.target.name]: Number(e.target.value) });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const dataForm = form.type && form.calories && form.date && form.durations;
    if (!dataForm) {
      alert("x");
    } else {
      const newItem = {
        id: uid(),
        ...form,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post("https://project-back-end-puripatkeng.vercel.app/api/activities/", newItem, { headers })
        .then(() => {
          setForm(defaultForm);
          fetchData();
        });
    }
  };

  //ปุ่ม edit

  return (
    <div className="activity-AddActivity">
      <h1>Add Activity</h1>

      <label>Activity Type</label>
      <select name="type" value={form.type} onChange={handleChange} required>
        <option value="">Select Your Activity &hellip;</option>
        <option value="Swimming">Swimming</option>
        <option value="Running">Running</option>
        <option value="Biking">Biking</option>
        <option value="Hiking">Hiking</option>
      </select>
      <span className="validity"></span>

      <label>Date</label>
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        min="2000-01-01" max="2025-12-31"
        required
      />
      <span className="validity"></span>

      <label>Duration (minute) </label>
      <input
        name="durations"
        type="number"
        value={form.durations}
        onChange={handleChange}
        min="1"
        max="1200"
        required
      />
      <span className="validity"></span>

      <label>Calories</label>
      <input
        name="calories"
        type="number"
        value={form.calories}
        onChange={handleChange}
        min="1"
        max="3000"
        required
      />
      <span className="validity"></span>
      <label>Note here!</label>
      <textarea
        name="note"
        id="textarea"
        cols="60"
        rows="5"
        maxLength={100}
        value={form.note}
        onChange={handleChange}
      ></textarea>

      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default AddActivity;
