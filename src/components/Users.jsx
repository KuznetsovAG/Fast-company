import React, { useState } from "react";
import User from "./User";

const Users = ({ users, onDelete, onToggleBookMark }) => {
  return (
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Качества</th>
              <th>Профессия</th>
              <th>Встретился , раз</th>
              <th>Оценка</th>
              <th>Избранное</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <User
                key={user._id}
                onDelete={onDelete}
                onToggleBookMark={onToggleBookMark}
                user={user}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
