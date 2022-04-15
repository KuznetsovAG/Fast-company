import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./Pagination";
import User from "./User";
import PropTypes from "prop-types";
const Users = ({ users, onDelete, onToggleBookMark }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);
    return (
        <>
            {count > 0 && (
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
                        {userCrop.map((user) => (
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
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};
export default Users;
