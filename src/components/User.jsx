import React, { useState } from "react";
import api from '../api'

const User = ({user}) => {

    // const res = api.users.fetchAll().map(function(user) {
        return (<tr>
            <td>{user.name}</td>
            <td>{user.profession.name}</td>
            <td className ="badge bg-primary">{user.qualities.map((char) => char.name)}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
        </tr>)
}

export default User