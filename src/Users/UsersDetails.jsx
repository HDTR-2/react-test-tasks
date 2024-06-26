import React from 'react';

export const UsersDetails = ({user, onBackClick}) => {

    return (
        <div className="Users__details">
            <h2>Подробная информация</h2>
            <p>Имя: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Телефон: {user.phone}</p>
            <button onClick={onBackClick}>Назад</button>
        </div>
    );
};

