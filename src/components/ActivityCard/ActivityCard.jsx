import React from "react";

const Card = ({ item, edit, remove }) => {
  return (
    <div className="all-card">
      <div className="grid">
        <div className="item first-row-item"><span>Type</span>&nbsp;{item.type}</div>
        <div className="item first-row-item"><span>Date</span>&nbsp;{item.date} </div>
        <div className="item first-row-item"><span>Duration</span>&nbsp;{item.durations} </div>
        <div className="item first-row-item"><span>Calories</span>&nbsp;{item.calories} </div>
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
        <div className="item second-row-item"><span>Notes</span>&nbsp;{item.note}</div>
        {" "}
      </div>
    </div>
  );
};

export default Card;
