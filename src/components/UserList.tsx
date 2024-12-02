import React from 'react';

const UserList: React.FC = () => {
    type User = {
        name: string,
        age: number
    }

    const user1: User = {
        name: "Adam",
        age: 35
    }

    const user2: User = {
        name: "Bret",
        age: 25
    }

    const user3: User = {
        name: "Carl",
        age: 45
    }

    const users: User[] = [user1, user2, user3]    
    
    return (
        <ul>
            {users.map((user, index) => (
                <li key={index} style={{ listStyleType: "none" }}>
                {user.name} is {user.age} years old
                </li>
            ))}
        </ul>
    );
};

export default UserList;
