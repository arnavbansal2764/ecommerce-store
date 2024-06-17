import { cn } from "@/libs/utils";
import { forwardRef } from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type="button",
    onClick,
    ...props
    
},ref)=>{
    return(
        <button onClick={onClick} ref={ref} className={cn(`w-auto rounded-full bg-black borded-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition`,className)}>
            {children}
        </button>
    )
})

Button.displayName = "Button";
export default Button;