import React from "react";
import BookMark from "./BookMark";
import Qualites from "./Qualites";
const User = (props) => {
  const { user } = props;
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((item) => (
          <Qualites key={item._id} name={item.name} color={item.color} />
        ))}
      </td>

      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td>
        <BookMark
          status={user.bookmark}
          onToggleBookMark={props.onToggleBookMark}
          id={user._id}
        />
      </td>
      <td>
        <button
          className={"btn btn-danger"}
          onClick={() => props.onDelete(user._id)}
        >
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default User;
