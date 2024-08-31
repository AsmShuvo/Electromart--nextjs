"use client"

import { signUp } from "@/service/user.service";
import Swal from "sweetalert2";

const SignUp = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const username = form.username.value;
        const password = form.password.value;
        const user = {
            email, username, password
        } 
        try {
            const result = await signUp(user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        } catch (error) {
            console.log("Registration failed: ", error)
            Swal.fire({
                icon: "error",
                text: "Registration failed",
            });
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    {/* Username */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DED81]"
                            placeholder="Enter your username"
                            name="username"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DED81]"
                            placeholder="Enter your email"
                            name="email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1DED81]"
                            placeholder="Enter your password"
                            name="password"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-full bg-[#1DED81] text-white py-2 px-4 rounded-md hover:bg-[#16b564] transition duration-200 ease-in-out"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
