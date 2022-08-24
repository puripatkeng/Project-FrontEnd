import "./PopupEdit.css";
const Delete = ({ handleDeleteTrue, handleDeleteFalse }) => {
  return (
    <div className="backdrop">
      <div className="popup-form">
        <h1>You sure you wanna delete?</h1>
        <div className="popup-flex">
          <button
            onClick={handleDeleteTrue}
            style={{ backgroundColor: "#222a37", padding: "10px" }}
          >
            Confirm
          </button>
          <button
            onClick={handleDeleteFalse}
            style={{ backgroundColor: "#612334", padding: "10px" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
