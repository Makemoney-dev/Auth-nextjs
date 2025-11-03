"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";



export default function signupPage(){
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: ""
    });

    const onSignup = async() => {
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 background-color[#white]">
            <h1>Signup Page</h1>
        <label htmlFor="username">Username</label>
        <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="Username"
            />
            <hr />
        <label htmlFor="email">Email</label>
        <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="Email"
            />
            <hr />
        <label htmlFor="password">Password</label>
        <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="Password"
            />
            <hr />
            <button
            onClick={onSignup}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Signup here</button>
            <Link href="/login">Visit login page</Link>  
        </div>
    )

}