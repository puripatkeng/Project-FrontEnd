import React from "react";

const Card = ({ item, edit, remove }) => {
  return (
    <div className="all-card">
      <div className="grid">
        <div className="item first-row-item">Type :{item.type}</div>
        <div className="item first-row-item">Date :{item.date}</div>
        <div className="item first-row-item">Duration :{item.durations}</div>
        <div className="item first-row-item">Calories :{item.calories}</div>
        <div className="item2 first-row-item">
          <button
            style={{ backgroundColor: "#222a37", padding: "10px" }}
            className="edit-button"
            onClick={() => {
              edit(item.id);
            }}
          >
            <i className="uil uil-edit"></i>
          </button>
          <button
            style={{ backgroundColor: "#612334", padding: "10px" }}
            className="edit-button"
            onClick={() => {
              remove(item._id);
            }}
          >
            <i className="uil uil-trash-alt"></i>
          </button>
        </div>
        <div className="item second-row-item">Notes :{item.note}</div>
        {" "}
      </div>
    </div>
  );
};

export default Card;
