import React, { useState } from 'react';
import { signup } from '../api';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('teacher');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup({ email, password, role });
            // Redirect to Login or perform another action
        } catch (error) {
            console.error('Signup failed:', error.response.data);
            setError('Signup failed. Please try again.'); // Show error message
        }
    };

    return (
        <div className="container">
            <h1>Sign Up</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
