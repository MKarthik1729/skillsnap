import React from "react";
// import { ArrowRight, ArrowRightIcon } from "@phosphor-icons/react";

const BasicPageCard: React.FC<{title: string, description: string, content: string[]}> = ({title, description, content}) => {
    return (
        <div className="p-4 rounded-lg shadow-md border border-br mb-40 px-10">
            <h1 className="text-xxl font-bold">{title}</h1>
            <p className="text-gray-500 text-lg">{description}</p>
            <div className="mt-4">
                {content.map((item, index) => (
                    <p key={index} className="text-txt-primary text-xl mb-5 flex items-center">
                        {/* <ArrowRightIcon className="mr-2" size={20} /> */}
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default BasicPageCard;   