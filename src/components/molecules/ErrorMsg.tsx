import type { ReactNode } from "react"

export const ErrorMsg = ({ children }: { children: ReactNode }) => {
    return (
        <p
            className="w-full text-footnote font-regular text-pastel-red-400 leading-tight">
            {children}
        </p>
    )
}
