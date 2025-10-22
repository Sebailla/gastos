// /components/atoms/Avatar.tsx
import React from "react";
import type { BaseProps } from "../../types/ui";


export interface AvatarProps extends BaseProps {
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt = "avatar", size = 40, className = "" }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={`rounded-full object-cover ${className}`}
            style={{ width: size, height: size }}
        />
    );
};