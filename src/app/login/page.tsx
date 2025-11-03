"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";



export default function LoginPage(){
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    });

    const onLogin = async() => {
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 background-color[#white]">
            <h1>Login Page</h1>
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
            onClick={onLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Login here</button>
            <Link href="/signup">Visit Signup page</Link>  
        </div>
    )

}