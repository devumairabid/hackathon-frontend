

import React, { useEffect, useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUpForm = () => {
    const navigate = useNavigate();
    useEffect(() => {
        getData()
    }, [])
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
    });

    const getData = () => {

        const value = localStorage.getItem('token');
        console.log(value, 'value');
        if (value !== null) {
            navigate('/eStore');

        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const response = await axios.post('http://localhost:8000/auth/signUp', formData)

        console.log(response.data.token);
        localStorage.setItem('token', response.data.token);
        navigate('/eStore');
        setFormData({
            userName: '',
            email: '',
            password: ''
        })
    };



    return (
        <div className="signup-form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">userName:</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, userName: e.target.value }))}
                        required
                    />
                </div>
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
