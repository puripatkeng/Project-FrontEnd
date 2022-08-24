import React from "react";

const Pagination = ({ totalPages, page, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((number) => number + 1);

  return (
    <div className="numbers">
      {pages.map((number) => (
        <button style={{marginLeft:"20px"}}
          key={number}
          href="/#"
          onClick={() => handleClick(number)}
          className={`${page === number && "active"}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
