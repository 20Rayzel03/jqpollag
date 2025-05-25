//Kopfzeile

import React from "react";


export interface NavbarProps {
    children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({children}) => {
    return (
        <nav className="bg-[#1a1a1a] flex justify-center">
            <div className="flex flex-col items-center">{children}</div>
        </nav>
    )
}
export default Navbar