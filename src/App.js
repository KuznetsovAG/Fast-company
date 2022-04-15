import React, { useState } from "react";
import Users from "./components/Users";
import SearchStatus from "./components/SearchStatus";
import api from "./api";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
    return (
        <div>
            <SearchStatus length={users.length} />
            <Users
                onDelete={handleDelete}
                users={users}
                onToggleBookMark={handleToggleBookMark}
            />
        </div>
    );
}

export default App;
