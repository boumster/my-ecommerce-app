import { React, useState } from 'react';

export default function SignupForm({setPageState}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    function onClick_signup(){
        setError('');
        if (username === '' || password === '' || confirmPassword === '' || email === ''){
            setError('Please fill in all fields');
            return;
        } 
        if (password !== confirmPassword){
            setError('Passwords do not match');
            return;
        }
        // Call the signup function from the backend
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setEmail('');
    }

    return (
        <div className="signup">
                <h1>Signup</h1>
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
                <div className="input-group">
                    <label for="confirmPassword">Confirm Password:</label>
                    <input 
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label for="email">Email:</label>
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <button onClick={onClick_signup}>Signup</button>
                </div>
                <div>
                    <button onClick={setPageState}>Switch to Login</button>
                </div>
            </div>
        );
}