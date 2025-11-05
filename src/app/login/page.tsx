"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AnyARecord } from "node:dns";
import toast from "react-hot-toast";



export default function LoginPage(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async() => {
        try {
            setLoading(true);
            await axios.post('/api/users/login',user);
            console.log("Login successful");
            toast.success("Login successful");
            router.push('/profile');
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);    
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


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