"use client"

import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { login } from "@/service/user.service";

const Login = () => {

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            email, password
        }
        try {
            const result = await login(user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Logged in successfully",
                showConfirmButton: false,
                timer: 1500
            });
            console.log("Login successful");
            form.reset();
            router.push("/profile/user");
        } catch (error) {
            console.log("Login failed: ", error)
            Swal.fire({
                icon: "error",
                text: "Login failed",
            });
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
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
                            Login
                        </button>
                    </div>

                    {/* Register Link */}
                    <div className="text-center mt-4">
                        <Link href="/register" className="text-blue-500 hover:underline">
                            Don't have an account? Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
