import React from 'react';

export const UserList = ({users, onUserClick}) => {
    return (
        <div className="Users__list">
            <h2>Список пользователей</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => onUserClick(user.id)}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};