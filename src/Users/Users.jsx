import React, {useState, useEffect} from 'react';
import {UsersDetails} from "./UsersDetails";
import {UserList} from "./UsersList";
import "./User.scss";

export const Users = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Ошибка при выборке пользователей:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleUserClick = (userId) => {
        const user = users.find(user => user.id === userId);
        setSelectedUser(user);
    };

    const handleBackClick = () => {
        setSelectedUser(null);
    };
    return (
        <div className="Users">
            <div className="Users__container">
                {selectedUser ? (
                    <UsersDetails user={selectedUser} onBackClick={handleBackClick}/>
                ) : (
                    <UserList users={users} onUserClick={handleUserClick}/>
                )}
            </div>
        </div>
    );
};

