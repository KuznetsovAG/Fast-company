import React from "react";

const BookMark = ({ status, onToggleBookMark, id }) => {
  return (
    <button onClick={() => onToggleBookMark(id)}>
      <i className={`bi bi-bookmark${status ? "-check-fill" : ""}`} />
    </button>
  );
};

export default BookMark;
