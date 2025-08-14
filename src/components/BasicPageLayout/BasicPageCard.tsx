import React from "react";
// import { ArrowRight, ArrowRightIcon } from "@phosphor-icons/react";

const BasicPageCard: React.FC<{title: string, description: string, content: string[]}> = ({title, description, content}) => {
    return (
        <div className="p-3 sm:p-4 md:p-6 rounded-lg shadow-md border border-br mb-20 sm:mb-32 md:mb-40 px-4 sm:px-6 md:px-10">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-xxl font-bold">{title}</h1>
            <p className="text-gray-500 text-base sm:text-lg">{description}</p>
            <div className="mt-3 sm:mt-4">
                {content.map((item, index) => (
                    <p key={index} className="text-txt-primary text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-5 flex items-center">
                        {/* <ArrowRightIcon className="mr-2" size={20} /> */}
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default BasicPageCard;   