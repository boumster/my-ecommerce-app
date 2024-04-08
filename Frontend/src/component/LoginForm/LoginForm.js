import { React, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Auth/Auth';

const API_URL = 'http://localhost:5000';

export default function LoginForm({setPageState}) {
    const auth = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function onClick_login(){
        setError('');
        if (username === '' || password === ''){
            setError('Please fill in all fields');
            return;
        } 
        API_Login();
        // Call the login function from the backend
        setUsername('');
        setPassword('');
    }

    async function API_Login(){
        try {
            const response = await axios.post(`${API_URL}/login`, {
                username: username,
                password: password
            });
            if (response){
                auth.setAuthentication(true);
            }
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <div className="input-group">
                <label for="username">Username:</label>
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    name="username"
                    id="username"
                />
            </div>
            <div className="input-group">
                <label for="password">Password:</label>
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div>
                <button onClick={onClick_login}>Login</button>
            </div>
            <div>
                <button onClick={setPageState}>Switch to Signup</button>
            </div>
        </div>
    );
}