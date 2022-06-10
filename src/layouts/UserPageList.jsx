import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/Page/UserPage";
import Users from "../components/Page/UsersListPage/Users";
const UserPageList = () => {
    const params = useParams();
    const { userId } = params;
    return <>{userId ? <UserPage userId={userId} /> : <Users />}</>;
};

export default UserPageList;
