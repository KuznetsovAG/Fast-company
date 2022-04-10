import React from "react";

const Qualites = (props) => {
  return <span className={`badge bg-${props.color} m-1`}>{props.name}</span>;
};

export default Qualites;
