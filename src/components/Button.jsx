import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'

function Button({className,href,onClick,children,px,white}) {

    const classes =`button relative inline-flex h-11 justify-center items-center ${px || 'px-7'} transition-colors hover:text-color-1 ${white ? 'text-n-8':'text-n-1 '} ${className || ""}`

    const spanClasses = "relative z-10"

    const renderButton = ()  => (
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    );

    const renderLink = () => (
        <a href={href} className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    )

    return href? renderLink() : renderButton()
}

export default Button