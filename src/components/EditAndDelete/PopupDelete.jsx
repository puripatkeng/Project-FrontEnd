import "./PopupEdit.css";
const Delete = ({ handleDeleteTrue, handleDeleteFalse }) => {
  return (
    <div className="backdrop">
      <div className="popup-form">
        <div>
          <p>You sure you wanna delete?</p>
          <button onClick={handleDeleteTrue}>Confirm</button>
          <button onClick={handleDeleteFalse}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
