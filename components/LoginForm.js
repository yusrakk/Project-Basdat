<<<<<<< HEAD
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
=======
import React, { useState } from "react";
import { useRouter } from "next/router";
>>>>>>> 73931b6 (config login to database)

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

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
      // Proses sign up
      if (password !== confirmPassword) {
        setError("Password and confirm password do not match");
        return;
      }
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
          router.push("/home");
        } else {
          const data = await response.json();
          setError(data.error || "Failed to sign up");
        }
      } catch (error) {
        console.error("Error signing up:", error);
        setError("An error occurred while signing up");
      }
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
=======
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
        )}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-black text-white rounded-md"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p className="mt-4 text-center">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button className="text-blue-500" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign up here" : "Login here"}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
