import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-xxl font-bold">Welcome to SkillSnap</h1>
            <p className="text-lg text-secondary">
                SkillSnap helps you track and showcase your skills. Get started by exploring your dashboard or adding new skills!
            </p>
            <button
            onClick={() => {
                navigate("/dsa");
            }}
            className="bg-primary text-white px-4 py-2 rounded-md">Get Started</button>
        </div>
    );
};

export default Home;