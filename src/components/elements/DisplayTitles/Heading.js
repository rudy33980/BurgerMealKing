import React from 'react'

export default function Heading(props) {

    const {
        children,
        variant,
        theme, //style 
        display // color
    } = props;

    const classDefault = "px-7 py-3 text-secondary uppercase font-hold inline-block"
    let font, color


    switch (theme) {
        case "secondary":
            font = "font-secondary"
            break
        default:
            font = "tracking-tighter"
    }

    switch (display) {
        case "gray":
            color = "text-gray-600"
            break
        default:
            color = "text-secondary"
    }


    switch (variant) {
        case "h2":
            return (
                <div className='flex items-center justify-center my-5'>
                    <h3 className={`text-sm ${classDefault} ${font} ${color}`}>
                        {children}
                    </h3>
                </div>
            )
        default:
            return (
                <div className='flex items-center justify-center my-5'>
                    <h2 className={`${theme === "secondary" ? "text-5xl" : "text-1xl" } ${classDefault} ${font} ${color}`}>
                        {children}
                    </h2>
                </div>
            )

    }

}
