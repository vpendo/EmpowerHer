import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Login Page
export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => clearup(res))
      .catch((err) => console.log(err));
  };

  function clearup(das) {
    if (das.data.status === "Successfully Logged in") {
      navigate("/");
    } else {
      alert(das.data.Error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        onSubmit={handleSubmit}
        action="/dashboard"
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">Login to EmpowerHer</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold" htmlFor="password">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        
        <button
        onClick={()=>window.location.href="/dashboard"}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Sign in
        </button>
        
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/register" className="text-blue-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
