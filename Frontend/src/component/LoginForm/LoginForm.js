import { React, useState } from 'react';

export default function LoginForm({setPageState}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function onClick_login(){
        setError('');
        if (username === '' || password === ''){
            setError('Please fill in all fields');
            return;
        } 
        // Call the login function from the backend
        setUsername('');
        setPassword('');
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