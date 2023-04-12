import React, { ButtonHTMLAttributes } from "react"

interface CarouselDotProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    selected: boolean;
}

export const CarouselDot: React.FC<CarouselDotProps> = ({ selected, ...props}): JSX.Element => {
    return (
        <button
            {...props}
            className="embla__button"
        >
            { /* stupid border-radius bug on safari */ }
            <div
                className={['embla__dot', (selected ? 'is-selected' : '')].join(" ")}
            >
            </div>
        </button>
    )
}