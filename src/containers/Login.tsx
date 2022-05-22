import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";

function Login() {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = (email: string, password: string) => {

    }
    
    const handleSubmit = () => {

    }

    return (
        <div className="h-screen flex bg-gray-bg1">
            <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
                <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
                    Log in to your account
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <TextField
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(v) =>setEmail(v.target.value)}
                        />
                        <TextField
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(v) => setPassword(v.target.value)}
                        />
                    </div>
                    <div className="text-danger text-center my-2" hidden={false}>
                        {message}
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <Button 
                            type="submit"
                            disabled={loading}
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;