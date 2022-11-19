import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

export default function Button({children, ...props}: ButtonProps) {
    return (
        <button {...props}>
            {children}
        </button>
    )
}