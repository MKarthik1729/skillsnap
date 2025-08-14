import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UnderConstructionPage from "../UnderConstructionPage";
import { pages_data } from "./PagesData";
import BasicPageCard from "./BasicPageCard";
import { ArrowLeftIcon, CodeIcon } from "@phosphor-icons/react";

const BasicPageLayout: React.FC = () => {
    const { title } = useParams() || { title: null };
    const navigate = useNavigate();
    if(!title || !pages_data[title as keyof typeof pages_data]){
        return   <UnderConstructionPage />;
    }
    const page_data = pages_data[title as keyof typeof pages_data];
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
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center flex-1 mb-4 sm:mb-0">{title.toUpperCase()}</h1>
                <button className="pr-6 sm:pr-8 md:pr-10 pl-6 sm:pl-8 md:pl-10 pt-3 sm:pt-4 md:pt-5 pb-3 sm:pb-4 md:pb-5 rounded-lg hover:bg-gray-100 transition-colors flex flex-col sm:flex-row items-center" 
                aria-label="Go back"
                onClick={() => {
                    navigate('/page/working');
                }}
                >
                    <CodeIcon size={24} className="sm:w-8 sm:h-8 md:w-8 md:h-8 mb-1 sm:mb-0" weight="bold" />
                    <p className="text-sm sm:text-base">code</p>
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