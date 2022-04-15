import React from "react";
import BookMark from "./BookMark";
import Qualites from "./Qualites";
import PropTypes from "prop-types";
const User = ({ user, onToggleBookMark, onDelete }) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((item) => (
                    <Qualites
                        key={item._id}
                        name={item.name}
                        color={item.color}
                    />
                ))}
            </td>

            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <BookMark
                    status={user.bookmark}
                    onToggleBookMark={onToggleBookMark}
                    id={user._id}
                />
            </td>
            <td>
                <button
                    className={"btn btn-danger"}
                    onClick={() => onDelete(user._id)}
                >
                    Удалить
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    user: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};
export default User;
