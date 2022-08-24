import "./PopupEdit.css";

const Popup = (props) => {
  const { editForm, setEditForm, update, setCheckEditItem } = props;

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(editForm.id);
    update(editForm.id, editForm);
  };


  const handleEditChange = (e) => {
    if (e.target.type === "number") {
      setEditForm({ ...editForm, [e.target.name]: Number(e.target.value) });
    } else {
      setEditForm({ ...editForm, [e.target.name]: e.target.value });
    }
    // console.log("activity", activity);
  };

  const handleCancel = () => {
    setCheckEditItem(false);
  };

  return (
    <div className="backdrop">
      <div className="popup-form">
        <form className="form-popup">
          <label>Activity</label>
          <select
            name="type"
            className="select-activity"
            value={editForm.type}
            onChange={handleEditChange}
          >
            <option value="" />
            <option value="Swimming">Swimming</option>
            <option value="Running">Running</option>
            <option value="Biking">Biking</option>
            <option value="Hiking">Hiking</option>
          </select>
        </form>
        <div className="form-popup">
          <label>Date & Time</label>
          <input
            name="date"
            type="date"
            value={editForm.date}
            onChange={handleEditChange}
          />
        </div>
        <div className="form-popup">
          <label>Duration(minute)</label>
          <input
            name="durations"
            type="number"
            value={editForm.durations}
            onChange={handleEditChange}
          />
        </div>
        <div className="form-popup">
          <label>Calories</label>
          <input
            name="calories"
            type="number"
            value={editForm.calories}
            onChange={handleEditChange}
          />
        </div>
        <div className="form-popup">
          <label>Note here!</label>
          <textarea
            name="note"
            id="textarea"
            cols="60"
            rows="5"
            value={editForm.note}
            onChange={handleEditChange}
          ></textarea>
        </div>
        <div className="button-save-cancel">
          <button type="submit" onClick={handleSubmit} className="save-button">
            save
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
