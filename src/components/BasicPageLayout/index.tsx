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
            <div className="flex items-center mb-6 mt-10 mx-auto max-w-6xl">
                <button className="pr-10 pl-10 pt-5 pb-5 rounded-lg hover:bg-gray-100 transition-colors" 
                aria-label="Go back"
                onClick={() => {
                    navigate(-1);
                }}
                >
                <ArrowLeftIcon size={32} weight="bold" />
                </button>
                <h1 className="text-3xl font-bold text-center flex-1">{title.toUpperCase()}</h1>
                <button className="pr-10 pl-10 pt-5 pb-5 rounded-lg hover:bg-gray-100 transition-colors" 
                aria-label="Go back"
                onClick={() => {
                    navigate('/page/working');
                }}
                >
                    <CodeIcon size={32} weight="bold" />
                    <p>code</p>
                </button>
            </div>
        <div className="p-6 max-w-6xl mx-auto mb-6 mt-20" >
            {/* <h1>BasicPageCard</h1> */}
            {page_data.map((item, index) => (
                <BasicPageCard key={index} title={item.title} description={item.description} content={item.content} />
            ))}
        </div>
        </> 
    );
};

export default BasicPageLayout;