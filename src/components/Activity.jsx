import List from "./ActivityList/ActivityList";
import AddActivity from "./ActivityForm/ActivityForm";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./EditAndDelete/PopupEdit";
import Delete from "./EditAndDelete/PopupDelete";
import Pagination from "./ActivityList/Pagination";

function Activity() {
  const [list, setList] = useState([]);
  const [checkEditItem, setCheckEditItem] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [popupDelete, setPopupDelete] = useState({
    show: false, // initial values set to false and null
    id: null,
  });
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (currentPage) => {
    try {
      console.log(typeof(currentPage));
      const response = await axios.get(
        `https://project-back-end.vercel.app/api/activities/?page=${currentPage}`
      );

      const data = response.data;
      console.log(data);
      setList(data.activities);
      setTotalPage(data.total_page);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const editItem = (id) => {
    setCheckEditItem(true);
    const selectEditItem = list.find((item) => item.id === id);
    setEditForm(selectEditItem);
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
          .patch(`https://project-back-end.vercel.app/api/activities/${id}/`, editForm, {
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

  //ปุ่มลบ item
  const handleDelete = (id) => {
    setPopupDelete({
      show: true,
      id,
    });
  };
  const handleDeleteTrue = () => {
    if (popupDelete.show && popupDelete.id) {
      let del = list.filter((act) => act.id !== popupDelete.id);
      axios
        .delete(`https://project-back-end.vercel.app/api/activities/${popupDelete.id}/`)
        .then((res) => {
          setList(del);
          fetchData();
        });
      setPopupDelete({
        show: false,
        id: null,
      });
    }
  };
  const handleDeleteFalse = () => {
    setPopupDelete({
      show: false,
      id: null,
    });
  };
  const handleClickChange = (number) => {
    setCurrentPage(number);
  };
  useEffect(() => {
    // console.log(currentPage);
    fetchData(currentPage);
  }, [currentPage + 1]);



  return (
    <div>
      <div className="activity">
        <AddActivity fetchData={fetchData} />
        <List list={list} remove={handleDelete} edit={editItem} />
      </div>
      <></>
      <div className="pagination">
        {/* <button>This Month</button> */}
        <Pagination
          totalPages={totalPage}
          handleClick={handleClickChange}
          page={currentPage}
        />
      </div>
      {popupDelete.show && (
        <Delete
          handleDeleteTrue={handleDeleteTrue}
          handleDeleteFalse={handleDeleteFalse}
        />
      )}
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
}

export default Activity;
