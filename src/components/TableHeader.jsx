import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        // if (selectedSort.path === item) {
        //     onSort({
        //         iter: item,
        //         order: selectedSort.order === "asc" ? "desc" : "asc"
        //     });
        // } else {
        //     onSort({ iter: item, order: "asc" });
        // }

        onSort({
            iter: item,
            order: selectedSort.order === "asc" ? "desc" : "asc"
        });
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {selectedSort.iter === columns[column].path ? (
                            <i
                                className={
                                    "bi bi-caret-" +
                                    (selectedSort.order === "asc"
                                        ? "up-fill"
                                        : "down-fill")
                                }
                            ></i>
                        ) : (
                            <></>
                        )}
                    </th>
                ))}
                {/* <th onClick={() => handleSort("name")} scope="col">
                    Имя
                </th>
                <th scope="col">Качества</th>
                <th onClick={() => handleSort("profession.name")} scope="col">
                    Профессия
                </th>
                <th onClick={() => handleSort("completedMeetings")} scope="col">
                    Встретился, раз
                </th>
                <th onClick={() => handleSort("rate")} scope="col">
                    Оценка
                </th>
                <th onClick={() => handleSort("bookmark")} scope="col">
                    Избранное
                </th>
                <th /> */}
            </tr>
        </thead>
    );
};
TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};
export default TableHeader;
