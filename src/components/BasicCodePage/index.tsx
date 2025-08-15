import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon, CodeIcon, GearIcon } from "@phosphor-icons/react";
import { get_code_data_by_topic } from "../../store/fill_contents";
import type { CodeData } from "../../services/code";
import UnderConstructionPage from "../UnderConstructionPage";

const BasicCodePage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [code_data, set_code_data] = useState<CodeData[]>([]);
    const [selected_language_index, set_selected_language_index] = useState(0);
    const [loading, set_loading] = useState(true);
    const [error, set_error] = useState<string | null>(null);

    useEffect(() => {
        console.log("id", id);
        set_loading(true);
        get_code_data_by_topic(id as string).then((data) => {
            console.log(data);
            set_code_data(data);
            set_loading(false);
        }).catch((err) => {
            console.error("Error fetching code data:", err);
            set_error(err.message);
            set_loading(false);
        });
    }, [id]);

    // Get unique languages from code data
    const unique_languages = Array.from(new Set(code_data.map(item => item.language || 'Unknown')));
    
    // Get code for selected language
    const selected_code = code_data.find(item => item.language === unique_languages[selected_language_index]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg text-red-600">Error: {error}</div>
            </div>
        );
    }

    if(code_data.length === 0){
        return <UnderConstructionPage />;
    }

    return <div>
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6 mt-6 sm:mt-10 mx-auto max-w-6xl px-4 sm:px-6">
            <button className="pr-6 sm:pr-8 md:pr-10 pl-6 sm:pl-8 md:pl-10 pt-3 sm:pt-4 md:pt-5 pb-3 sm:pb-4 md:pb-5 rounded-lg hover:bg-gray-100 transition-colors mb-4 sm:mb-0"
                aria-label="Go back"
                onClick={() => {
                    navigate(-1);
                }}
            >
                <ArrowLeftIcon size={24} className="sm:w-8 sm:h-8 md:w-8 md:h-8" weight="bold" />
            </button>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center flex-1 mb-4 sm:mb-0">
                code page
            </h1>
            <button className="pr-6 sm:pr-8 md:pr-10 pl-6 sm:pl-8 md:pl-10 pt-3 sm:pt-4 md:pt-5 pb-3 sm:pb-4 md:pb-5 rounded-lg hover:bg-gray-100 transition-colors flex flex-col sm:flex-row items-center mr-2"
                aria-label="Settings"
                onClick={() => {
                    navigate(`/code/${id}/working`);
                }}
            >
                <GearIcon size={24} className="sm:w-8 sm:h-8 md:w-8 md:h-8 mb-1 sm:mb-0" weight="bold" />
                <p className="text-sm sm:text-base pl-2">working</p>
            </button>
            <button className="pr-6 sm:pr-8 md:pr-10 pl-6 sm:pl-8 md:pl-10 pt-3 sm:pt-4 md:pt-5 pb-3 sm:pb-4 md:pb-5 rounded-lg hover:bg-gray-100 transition-colors flex flex-col sm:flex-row items-center"
                aria-label="Go back"
                onClick={() => {
                    navigate(`/code/${id}`);
                }}
            >
                <CodeIcon size={24} className="sm:w-8 sm:h-8 md:w-8 md:h-8 mb-1 sm:mb-0" weight="bold" />
                <p className="text-sm sm:text-base pl-2">code</p>
            </button>
        </div>

        {/* Code Display Section */}
        {code_data.length > 0 && (
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Language Selection Sidebar */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3">Select Language:</h2>
                    <div className="flex flex-wrap gap-2">
                        {unique_languages.map((language, index) => (
                            <button
                                key={language}
                                onClick={() => set_selected_language_index(index)}
                                className={`px-4 py-2 rounded-lg border transition-colors ${
                                    selected_language_index === index
                                        ? 'bg-blue-500 text-white border-blue-500'
                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                {language}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Code Display Area */}
                {selected_code && (
                    <div className="bg-gray-900 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-white text-lg font-semibold">
                                {selected_code.title || `Code in ${selected_code.language}`}
                            </h3>
                            <span className="text-gray-400 text-sm">
                                {selected_code.language}
                            </span>
                        </div>
                        
                        {selected_code.description && (
                            <div className="mb-4 p-3 bg-gray-800 rounded text-gray-300 text-sm">
                                {selected_code.description}
                            </div>
                        )}
                        
                        {selected_code.code ? (
                            <pre className="bg-gray-800 rounded p-4 overflow-x-auto">
                                <code className="text-green-400 text-sm">
                                    {selected_code.code}
                                </code>
                            </pre>
                        ) : (
                            <div className="text-gray-400 text-center py-8">
                                No code available for this language
                            </div>
                        )}
                    </div>
                )}
            </div>
        )}

        {code_data.length === 0 && !loading && (
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No code data available for this topic</p>
                </div>
            </div>
        )}
    </div>;
};

export default BasicCodePage;