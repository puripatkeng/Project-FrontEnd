import React, { useState, useEffect } from "react";
import axios from "axios";
import "./addactivity.css";
import List from "../activitylist/activitylist";
import { v4 as uid } from "uuid";
import Popup from "../activitylist/popup-form";
import Navbar from "../navbar/navbar";

const AddActivity = () => {
  const [loading, setLoading] = useState(true);

  const [list, setList] = useState([]);
  const defaultForm = {
    type: "",
    date: "",
    durations: "",
    calories: "",
    note: "",
  };
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get("http://127.0.0.1:8080/activities");
        const addIdToData = result.data.map((item) => {
          if (
            item.id !== "string" ||
            item.id === null ||
            item.id === undefined ||
            item.id.length < 1
          ) {
            const id = uid();
            return { ...item, id };
          }
          return;
        });
        setList(addIdToData.reverse());
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const [checkEditItem, setCheckEditItem] = useState(false);
  const [editForm, setEditForm] = useState({});

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
    // form.note;
    // console.log("dataForm", form);

    if (!dataForm) {
      alert("กรอกข้อมูลให้ครบถ้วน");
    } else {
      const newItem = {
        id: uid(),
        ...form,
      };
      const headers = {
        "Content-Type": "application/json",
      };

      axios
        .post("http://127.0.0.1:8080/activities/", newItem, { headers })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });

      setList([newItem, ...list]);
      setForm(defaultForm);
    }
  };

  //ปุ่ม edit
  const editItem = (id) => {
    setCheckEditItem(true);
    const searchEditItem = list.find((item) => item.id === id);
    // console.log(searchEditItem);
    setEditForm(searchEditItem);
  };

  //ปุ่มลบ item

  const removeItem = (id) => {
    const removeID = list.find((item) => {
      if (item.id === id) {
        id = item._id;
      }
    });
    axios
      .delete(`http://127.0.0.1:8080/activities/${id}/`)
      .then(alert("Post Delete Success"))
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setList(removeID);
  };

  const update = (id, updatedList) => {
    const updatedActList = list.map((item) => {
      if (item.id === id) {
        id = item._id;
        const headers = {
          "Content-Type": "application/json",
        };
        console.log(editForm);
        axios
          .patch(`http://127.0.0.1:8080/activities/${id}/`, editForm, {
            headers,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
        return { ...item, ...updatedList };
      }
      return item;
    });

    setCheckEditItem(false);
    setList(updatedActList);
  };

  return (
    <div>
      <div>
        <Navbar />
        <div className="container">
          <div className="form">
            <h1>Add Activity</h1>
            <div className="form-control">
              <label>Activity</label>
              <select
                name="type"
                className="select-activity"
                value={form.type}
                onChange={handleChange}
              >
                <option value="" />
                <option value="Swimming">Swimming</option>
                <option value="Running">Running</option>
                <option value="Biking">Biking</option>
                <option value="Hiking">Hiking</option>
              </select>
            </div>
            <div className="form-control">
              <label>Date & Time</label>
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label>Duration(minute)</label>
              <input
                name="durations"
                type="number"
                value={form.durations}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-control">
              <label>Calories</label>
              <input
                name="calories"
                type="number"
                value={form.calories}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-control">
              <label>Note here!</label>
              <textarea
                name="note"
                id="textarea"
                cols="60"
                rows="5"
                value={form.note}
                onChange={handleChange}
              ></textarea>
            </div>

            <input type="file" />
            <button onClick={handleSubmit}>Send</button>
          </div>

          <List list={list} remove={removeItem} edit={editItem} />
        </div>
      </div>
      {checkEditItem && (
        <Popup
          editForm={editForm}
          setEditForm={setEditForm}
          update={update}
          setCheckEditItem={setCheckEditItem}
        />
      )}
    </div>
  );
};

export default AddActivity;
