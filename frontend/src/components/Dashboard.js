import React, { useEffect, useState } from 'react';
import { getClassrooms } from '../api';

const Dashboard = () => {
    const [classrooms, setClassrooms] = useState([]);

    useEffect(() => {
        const fetchClassrooms = async () => {
            const token = localStorage.getItem('token');
            const { data } = await getClassrooms(token);
            setClassrooms(data);
        };

        fetchClassrooms();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {classrooms.map((classroom) => (
                    <li key={classroom._id}>{classroom.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
