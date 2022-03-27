import React, { useState } from "react";
import api from '../api'
import User from "./User";
const UsersList = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const [count, setCount] = useState(users.length)
    console.log(users)

    const getBadgeColor = () => {
    let color = 'badge '
    color += users.length === 0 ? 'bg-danger' : 'bg-primary'
    return color
    }
    
    const renderQuantity = () => {
        if (users.length === 0) {
            return <h1>Никто не тусанёт с тобой сегодня</h1>
        } else if(users.length === 4 || users.length === 3 || users.length === 2){
            return <h1>{`${users.length} человека тусанут с тобой сегодня`}</h1>
        } else {
            return <h1>{`${users.length} человек тусанет с тобой сегодня`}</h1>
        }
    }

    const renderTableHead = () => {
        if (users.length === 0) return 
        return <thead>
            <tr>
                <th>Имя</th>
                <th>Качества</th>
                <th>Профессия</th>
                <th>Встретился, раз</th>
                <th>Оценка</th>
                <th></th>
            </tr>
        </thead>
    };
    
    const hendleUsers = (id) => {
        setUsers((prevState) => prevState.filter((user) => user !==id))
    }

    const renderTableBody = () => {
        return (
            users.map((user) => (
      
            <tr
            key = {user._id}
            > 
            <td>{user.name}</td>
            <td>{user.qualities.map((item) => {
                const getBadgeClasess = () => {
                    let classes = 'badge m-1 bg-'
                    classes += item.color
                    return classes
                }
                return <span className={getBadgeClasess()} key={item._id}>{item.name}</span>
            })}</td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td>
                <button className="btn btn-danger" onClick={() => hendleUsers(user)}>
                delete
                </button>
            </td>
            </tr>
        )) 
        ) 
    }
    

    return (
        <>
            <span className = {getBadgeColor()}>{renderQuantity()}</span>
        <table className="table">
            {renderTableHead()}
            <tbody>
                {renderTableBody()}
               
            </tbody>
        </table>
            
        </>
    )
}

export default UsersList