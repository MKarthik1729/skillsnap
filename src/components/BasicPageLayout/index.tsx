import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UnderConstructionPage from "../UnderConstructionPage";
// import { pages_data } from "./PagesData";
import BasicPageCard from "./BasicPageCard";
import { ArrowLeftIcon, CodeIcon, GearIcon } from "@phosphor-icons/react";
import { get_page_data_by_topic } from "../../store/fill_contents";

const BasicPageLayout: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [page_data, set_page_data] = useState<any[]>([]);
    const [loading, set_loading] = useState(true);
    const [error, set_error] = useState<string | null>(null);

    useEffect(() => {
        console.log("id", id);
        set_loading(true);
        set_error(null);
        
        get_page_data_by_topic(id as string)
            .then((page_data) => {
                console.log(page_data);
                set_page_data(page_data);
                set_loading(false);
            })
            .catch((error) => {
                console.error("Error fetching page data:", error);
                set_error(error.message);
                set_loading(false);
            });
    }, [id]);
    // if(!title || !pages_data[title as keyof typeof pages_data]){
    //     return   <UnderConstructionPage />;
    // }

    // const page_data = pages_data[title as keyof typeof pages_data];
    
    // Show loading state
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    // Show error state
    if (error) {
        return (
            <UnderConstructionPage />
        );
    }

    // Show under construction page if no data
    if (page_data.length === 0) {
        return <UnderConstructionPage />;
    }

    return (<>
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
                    {page_data[0]?.title || 'Untitled'}
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
        <div className="p-3 sm:p-4 md:p-6 max-w-6xl mx-auto mb-4 sm:mb-6 mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6" >
            {/* <h1>BasicPageCard</h1> */}
            {page_data.map((item, index) => (
                <BasicPageCard key={index} title={item.title} description={item.description} content={item.content} />
            ))}
        </div>
        </> 
    );
};

export default BasicPageLayout;