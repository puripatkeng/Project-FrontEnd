import React from "react";

const Card = ({ item, edit, remove }) => {
  return (
    <div className="all-card">
      <div className="grid">
        <div className="item first-row-item"><span><h3>Activity Type :</h3><h4>{item.type}</h4></span></div>
        <div className="item first-row-item"><span><h3>Date :</h3><h4>{item.date}</h4></span></div>
        <div className="item third-row-item"><span><h3>Duration :</h3><h4>{item.durations}</h4></span></div>
        <div className="item  third-row-item"><span><h3>Calories :</h3><h4>{item.calories}</h4></span></div>
        <div className="item2 third-row-item">
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
        <div className="item second-row-item"><span><h3>Notes :</h3><h4>{item.note}</h4></span></div>
        {" "}
      </div>
    </div>
  );
};

export default Card;
