// /components/atoms/Icon.tsx
import React from "react";
import type { BaseProps } from "../../types/ui";


export interface IconProps extends BaseProps {
    name: "search" | "user" | "cart" | "close";
    size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, size = 20, className = "" }) => {
    // SVGs inline para evitar dependencia adicional
    const base = "inline-block align-middle";
    if (name === "search") {
        return (
            <svg className={`${base} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none">
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
    if (name === "user") {
        return (
            <svg className={`${base} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
    if (name === "cart") {
        return (
            <svg className={`${base} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none">
                <path d="M6 6h15l-1.5 9h-13z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="20" r="1" fill="currentColor" />
                <circle cx="19" cy="20" r="1" fill="currentColor" />
            </svg>
        );
    }
    if (name === "close") {
        return (
            <svg className={`${base} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
    return null;
};