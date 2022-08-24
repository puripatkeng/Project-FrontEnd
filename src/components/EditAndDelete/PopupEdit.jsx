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
      <div className="activity-AddActivity">
        <h1>Edit Activity</h1>
        <label>Activity</label>
        <select
          name="type"
          value={editForm.type}
          onChange={handleEditChange}
          required
        >
          <option value="">Select Your Activity &hellip;</option>
          <option value="Swimming">Swimming</option>
          <option value="Running">Running</option>
          <option value="Biking">Biking</option>
          <option value="Hiking">Hiking</option>
        </select>
        <span className="validity"></span>

        <label>Duration (minute) </label>
        <input
          name="date"
          type="date"
          value={editForm.durations}
          onChange={handleEditChange}
          required
        />
        <span className="validity"></span>

        <label>Duration</label>
        <input
          name="durations"
          type="number"
          value={editForm.durations}
          onChange={handleEditChange}
          min="1"
          max="1200"
          required
        />
        <span className="validity"></span>

        <label>Calories</label>
        <input
          name="calories"
          type="number"
          value={editForm.calories}
          onChange={handleEditChange}
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
          value={editForm.note}
          onChange={handleEditChange}
        ></textarea>

        <button
          type="submit"
          onClick={handleSubmit}
          style={{ backgroundColor: "#222a37", padding: "10px" }}
        >
          save
        </button>
        <button
          style={{ backgroundColor: "#612334", padding: "10px" }}
          onClick={handleCancel}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default Popup;
