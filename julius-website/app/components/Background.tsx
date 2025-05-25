//Ist ihgendwas für später damit es schöner aussieht
import React from "react";
import clsx from "clsx"


export interface BackgroundProps {
    children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <div className={clsx("absolute inset-0 bg-cover bg-center w-[100vw] h-[100vh]")}>
           {children}
        </div>
    )
}
export default Background;