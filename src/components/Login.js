import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

const predefinedUsers = [
    { id: 'user1', name: 'John Doe', email: 'john.doe@example.com' },
    { id: 'user2', name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 'user3', name: 'Alice Johnson', email: 'alice.johnson@example.com' },
];

const Login = ({ onLogin }) => {
    const [userId, setUserId] = useState(''); // Fixed: Removed space in `setUserId`
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Ensure the userId is a string (to avoid type issues)
        if (typeof userId !== 'string') {
            setError('Invalid User Type. Please enter a valid User ID.');
            return;
        }

        const user = predefinedUsers.find(user => user.id === userId.trim()); // Trim spaces
        if (user) {
            onLogin(user); // Call the onLogin function passed as a prop
            setError('');  // Clear error message on successful login
        } else {
            setError('Invalid User ID. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)} // Fixed function call
                    placeholder="Enter User ID"
                    required
                />
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
