import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import QualitesList from "../../ui/qualities/QualitesList";
import { Link, useParams } from "react-router-dom";
import ChangePage from "../ChangePage/ChangePage";
const UserPage = () => {
    const [user, setUser] = useState();
    const params = useParams();
    const { userId, isEdit } = params;

    useEffect(
        () => api.users.getById(userId).then((data) => setUser(data)),
        []
    );
    if (isEdit === "edit") {
        return <ChangePage />;
    }

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitesList qualities={user.qualities} />
                <p>completedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <button>
                    <Link to={`/users/${userId}/edit`}>Изменить</Link>
                </button>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
