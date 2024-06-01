import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userExists, setUserExists] = useState(true); // Simulated state

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate checking if the user exists
    if (email !== 'user@exists.com') {
      setUserExists(false);
    } else {
      // Add login logic here
      console.log('Logging in with', email, password);
    }
  };

  const handleGoogleSuccess = (response) => {
    // Handle Google login success
    console.log('Google login successful with:', response);
  };

  const handleGoogleFailure = (error) => {
    // Handle Google login failure
    console.error('Google login failed:', error);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      {userExists ? (
        <>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3 flex items-center justify-center text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-black text-white rounded-md">Login</button>
        </>
      ) : (
        <div className="mt-4 flex flex-col space-y-4">
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Sign in with Google"
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            cookiePolicy={'single_host_origin'}
            className="flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-md"
          />
          <button
            type="button"
            onClick={handleSignUp}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Create an account manually
          </button>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
