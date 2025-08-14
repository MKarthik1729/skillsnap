import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, HouseIcon, WrenchIcon } from "@phosphor-icons/react";

const UnderConstructionPage: React.FC = () => {
    const navigate = useNavigate();

    const handle_go_home = () => {
        navigate("/");
    };

    const handle_go_back = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                {/* Construction Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                            <WrenchIcon size={48} className="text-white" weight="duotone" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                            <span className="text-white text-xs font-bold">!</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Under Construction
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We're working hard to bring you something amazing! 
                    This page is currently being built with care and attention to detail.
                </p>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-orange-400 to-yellow-500 h-2 rounded-full animate-pulse" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">65% Complete</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handle_go_home}
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        <HouseIcon size={20} />
                        Go Home
                    </button>
                    
                    <button
                        onClick={handle_go_back}
                        className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        <ArrowLeftIcon size={20} />
                        Go Back
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="mt-12 text-center">
                    <div className="flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnderConstructionPage;