import Link from "next/link";

export interface NavbarItemsProps {
    title: string;
    link: string;
}

export const NavbarItems: React.FC<NavbarItemsProps> = ({ title, link }) => {
    return (
        <div>
            <Link href={link}>{title}</Link>
        </div>
    )
}