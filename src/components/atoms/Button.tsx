// /components/atoms/Button.tsx
import React from "react";
import type { BaseProps } from "../../types/ui";


export type ButtonVariant = "base" | "ghost" | "success" | "danger" | "icon" | "iconText";

export type ButtonColor = "base"| "yellow" | "rose" | "sky" | "lira" | "green" | "red" | "orange" | "ghost";

export interface ButtonProps extends BaseProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
    disabled?: boolean;
    ariaLabel?: string;
    color?: ButtonColor;
}

const variantClass = {
    base: "bg-none text-gray-900 ring-gray-300",
    success: "bg-green-apple-300 text-gray-900 ring-green-apple-300",
    danger: "bg-pastel-red-300 text-gray-900 ring-pastel-red-300",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-900 ring-gray-300",
    icon:  `text-gray-900 ring-gray-300 rounded-xl w-10 h-10 p-0 justify-center`,
    iconText: "text-gray-900 ring-gray-300 gap-2 px-4 py-2 rounded-xl",
};

const colorVariant = {
    base: "bg-none text-gray-900 ring-gray-300",
    yellow: "bg-pastel-yellow-300 text-gray-900 ring-pastel-yellow-300 hover:bg-pastel-yellow-300/40",
    rose: "bg-pastel-rose-200 text-gray-900 ring-pastel-rose-200 hover:bg-pastel-rose-300/40",
    lira: "bg-pastel-lira-200 text-gray-900 ring-pastel-lira-200 hover:bg-pastel-lira-300/40",
    sky: "bg-pastel-sky-300 text-gray-900 ring-pastel-sky-300 hover:bg-pastel-sky-300/40",
    green: "bg-green-apple-300 text-gray-900 ring-green-apple-300 hover:bg-green-apple-300/40",
    red: "bg-pastel-red-300 text-gray-900 ring-pastel-red-300 hover:bg-pastel-red-300/40",
    orange: "bg-pastel-orange-300 text-gray-900 ring-pastel-orange-300 hover:bg-pastel-orange-300/40",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-900 ring-gray-300",
    
};

export const Button: React.FC<ButtonProps> = ({
    children,
    className = "",
    onClick,
    type = "button",
    variant= "base",
    disabled = false,
    ariaLabel,
    color = "base",
}) => {

    const isIconOnly = variant === "icon";

    return (
        <button
            type={type}
            aria-label={isIconOnly && !ariaLabel ? "Icon button" : ariaLabel}
            disabled={disabled}
            onClick={onClick}
            className={[
                "btn hover:text-gray-700",
                variantClass[variant],
                colorVariant[color],
                disabled ? "opacity-60 cursor-not-allowed ring-gray-200" : "shadow-sm",
                className,
            ].join(" ")}
        >
            {children}
        </button>
    );
};

export default Button;