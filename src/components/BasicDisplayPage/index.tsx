import React, {  useEffect, useState } from "react";
import { use_string_array_store } from "../../store/content";
import {  get_skills, get_topics_of_skill } from "../../store/fill_contents";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ArrowLeftIcon   } from "@phosphor-icons/react";


const BasicDisplayPage: React.FC = () => {
    const { title } = useParams() || { title: null };
    const { strings  } = use_string_array_store();
    const [all_strings, set_all_strings] = useState<any[]>(strings);
    
    const navigate = useNavigate();
    useEffect(() => {
        // Print the entire strings array
        if(title) get_topics_of_skill(title).then((topics) => {
            console.log(topics);
            set_all_strings(topics);
        });
        else {
            // fill_dsa_topics();
            get_skills().then((skills) => {
                set_all_strings(skills);
            });
        }
    }, [title]);

    // Get all strings as an array
    // const all_strings = get_all_strings();

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="flex items-center mb-6">
                <button
                    onClick={() => {
                        // if(title)fill_dsa_topics(title);
                        navigate(-1)}}
                    className="mr-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Go back"
                >
                    <ArrowLeftIcon size={24} weight="bold" />
                </button>
                <h1 className="text-3xl font-bold text-center flex-1">Data Structures & Algorithms Topics</h1>
            </div>
            <p className="text-lg text-gray-600 mb-8 text-center">Organized into 10 main categories</p>
            
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                    {all_strings && all_strings.map((topic: any, index: number) => (
                    <div key={index} className="p-4 rounded-lg hover:text-blue-600 shadow-md border border-br hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer hover:bg-gray-50">
                        <p
                        onClick={() => {
                            if(title){
                                // fill_topics_by_title(title);
                                navigate(`/page/${topic._id}`);
                            }
                            else{
                                console.log("Filling topics by title:", topic);
                                navigate(`/dsa/${topic._id}`);
                                // fill_topics_by_title(topic.title);
                            }
                        }}
                        className="text-lg font-bold hover:text-blue-600 transition-colors duration-200">
                            {topic.title || topic.name}
                            </p>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 text-center text-gray-500">
                <p>Total Categories: {all_strings.length}</p>
            </div>
        </div>
    );
};

export default BasicDisplayPage;