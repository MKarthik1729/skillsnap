import React, { useEffect } from "react";
import { use_dictionary_store } from "../../store/content";

const BasicDisplayPage: React.FC = () => {
    const { dictionary, get_all_entries } = use_dictionary_store();

    useEffect(() => {
        // Print the entire dictionary object
        console.log("Entire Dictionary Store:", dictionary);
        
        // Print all entries as an array
        const all_entries = get_all_entries();
        console.log("All DSA Topics:", all_entries);
        
        // Print the count of topics
        console.log("Total Topics Count:", all_entries.length);
        
        // Print first few entries for verification
        console.log("First 5 Topics:", all_entries.slice(0, 5));
    }, [dictionary, get_all_entries]);

    // Get all entries as an array
    const all_entries = get_all_entries();

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Data Structures & Algorithms Topics</h1>
            <p className="text-lg text-gray-600 mb-8 text-center">Organized into 10 main categories with subtopics</p>
            
            <div className="grid gap-6 grid-cols-3">
                {all_entries.map((entry, index) => (
                    <div key={index} className=" p-4 rounded-lg shadow-md border border-br">
                        <p className="text-lg font-bold">{entry.key}</p>
                        </div>
                ))}
            </div>
            
            <div className="mt-8 text-center text-gray-500">
                <p>Total Categories: {all_entries.length}</p>
                <p>Total Subtopics: {all_entries.reduce((total, entry) => total + (entry.subtopics?.length || 0), 0)}</p>
            </div>
        </div>
    );
};

export default BasicDisplayPage;