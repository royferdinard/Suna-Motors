import React from "react";

const Card = ({children})=>{
    return (
        <>
        <div className="md:w-[32%] w-full h-98 shrink-0 bg-white shadow-sm rounded-xl overflow-hidden
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-xl
        ">
            {children}
        </div>
        </>
    )
}

export default Card