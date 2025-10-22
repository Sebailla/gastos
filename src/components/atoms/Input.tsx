// /components/atoms/Input.tsx
import React from "react";
import type { BaseProps } from "../../types/ui";


export interface InputProps extends BaseProps {
    value?: string;
    onChange?: (v: string) => void;
    placeholder?: string;
    type?: string;
    name?: string;
}

export const Input: React.FC<InputProps> = ({ value, onChange, placeholder, className = "", type = "text", name }) => {
    return (
        <input
            name={name}
            type={type}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            className={[
                "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300",
                className,
            ].join(" ")}
        />
    );
};