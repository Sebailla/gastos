// /components/atoms/Icon.tsx
import React from "react";
import type { BaseProps } from "../../types/ui";


export interface IconProps extends BaseProps {
    name: "search" | "user" | "cart" | "close" | "login" | "loginuser" | "key";
    size?: number;
    color?: string
}

export const Icon: React.FC<IconProps> = ({ name, size = 20, className = "", color = 'currentColor'}) => {
    // SVGs inline para evitar dependencia adicional
    const base = "inline-block align-middle";
    if (name === "search") {
        return (
            <svg className={`${base} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill={color}>
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
    if (name === "login") {
        return (
            <svg className={`${base} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
        );
    }
    if (name === "loginuser") {
        return (
            <svg className={`${base} ${className}`} width={size} height={size} fill="none" viewBox="0 0 24 24">
                <path d="M6.0183333333333335 6.9383333333333335a5.5008333333333335 5.5008333333333335 0 1 0 11.001666666666667 0 5.5008333333333335 5.5008333333333335 0 1 0 -11.001666666666667 0" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="1.5"></path>
                <path d="M2.3575 22.520833333333336v-1.8304166666666666a9.152083333333334 9.152083333333334 0 0 1 6.708333333333334 -8.826250000000002" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="1.5"></path>
                <path d="m16.1 14.269583333333335 -0.9583333333333334 1.8304166666666666H8.76875l-1.8304166666666666 1.84 1.8304166666666666 1.8304166666666666h6.420833333333333l0.9583333333333334 1.8304166666666666h2.7504166666666667a2.7408333333333332 2.7408333333333332 0 0 0 2.7504166666666667 -2.7504166666666667v-1.8304166666666666a2.7504166666666667 2.7504166666666667 0 0 0 -2.7504166666666667 -2.7504166666666667Z" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="1.5"></path>
                <path d="m11.519166666666667 17.94 0 1.8304166666666666" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="1.5"></path>
                <path d="m18.850416666666668 17.020000000000003 0 1.8304166666666666" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="1.5"></path>
            </svg>
        );
    }
    if (name === "key") {
        return (
            <svg className={`${base} ${className}`} width={size} height={size} fill={color} viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m12.962 15.211 2.973 -2.972 -0.348 -2.435h2.783l-0.348 -2.435 2.435 0.349L21.5 6.674l-0.348 -3.826 -3.826 -0.348 -8.538 8.537 -2.766 -0.711L1.5 14.848l1.565 6.087L9.152 22.5l4.522 -4.522 -0.712 -2.767Z" stroke-width="1"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M19.877 2.73199 10.022 12.587" stroke-width="1"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m7.23903 19.544 -2.087 -0.696 -0.695 -2.087 1.391 -1.392 2.783 2.783 -1.392 1.392Z" stroke-width="1"/>
            </svg>
        );
    }
    if (name === "user") {
        return (
            <svg className={`${base} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill={color}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
    if (name === "cart") {
        return (
            <svg className={`${base} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill={color}>
                <path d="M6 6h15l-1.5 9h-13z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="20" r="1" fill="currentColor" />
                <circle cx="19" cy="20" r="1" fill="currentColor" />
            </svg>
        );
    }
    if (name === "close") {
        return (
            <svg className={`${base} ${className}`} width={size} height={size} viewBox="0 0 24 24" fill={color}>
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
    return null;
};