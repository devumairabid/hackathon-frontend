

import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        await axios.post('http://localhost:8000/auth/login', formData)
            .catch(error => {
                console.error('Axios Error:', error);
            });
        setFormData({

            email: '',
            password: ''
        })
    };



    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
