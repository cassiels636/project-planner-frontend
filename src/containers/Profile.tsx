import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const Profile = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {

    }

    return (
        <div className="w-full h-screen">
            <div className="w-full p-6">
                <Button
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </div>
            <div className="w-full h-full text-center items-center">
                <p className="self-center my-auto">Welcome</p>
            </div>
        </div>
    );
};

export default Profile;