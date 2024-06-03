<<<<<<< HEAD
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
=======
import React, { useState } from "react";
import { useRouter } from "next/router";
>>>>>>> 73931b6 (config login to database)
=======
// components/LoginForm.js
import React, { useState } from 'react';
>>>>>>> 6428d8f (second commit config login to database)
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userExists, setUserExists] = useState(true); // Simulated state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (isLogin) {
      // Proses login
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
          router.push("/home");
        } else {
          setError("Invalid email or password");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        setError("An error occurred while logging in");
      }
    } else {
      // Add login logic here
      console.log('Logging in with', email, password);
    }
  };

<<<<<<< HEAD
  const handleGoogleSuccess = (response) => {
    // Handle Google login success
    console.log('Google login successful with:', response);
  };

  const handleGoogleFailure = (error) => {
    // Handle Google login failure
    console.error('Google login failed:', error);
=======
<<<<<<< HEAD
<<<<<<< HEAD
  const handleGoogleSuccess = (response) => {
    // Handle Google login success
    console.log('Google login successful with:', response);
  };

  const handleGoogleFailure = (error) => {
    // Handle Google login failure
    console.error('Google login failed:', error);
=======
  const handleGoogleLogin = () => {
    // Add Google login logic here
    console.log('Google login');
  };

  const handleSignUp = () => {
    // Add sign up logic here
    console.log('Redirect to sign up');
>>>>>>> 6428d8f (second commit config login to database)
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

<<<<<<< HEAD
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
<<<<<<< HEAD
=======
            className="flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-md"
          />
          <button
            type="button"
            onClick={handleSignUp}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Create an account manually
          </button>
=======
=======
>>>>>>> 6428d8f (second commit config login to database)
  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isLogin ? "Login" : "Sign Up"}
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
>>>>>>> 73931b6 (config login to database)
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        {!isLogin && (
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-black text-white rounded-md">Login</button>
        </>
      ) : (
        <div className="mt-4 flex flex-col space-y-4">
          <button
            type="button"
            onClick={handleGoogleLogin}
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
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

export default AuthPage;
