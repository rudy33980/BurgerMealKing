import React from 'react'


export default function Button({ children, className, color, theme }) {


  let background
  if (color === 'secondary') { background = "bg-secondary hover:bg-secondary-hover" }
  else if (color === 'danger') { background = "bg-red-primary hover:bg-red-primary-hover" }
  else { background = "bg-primary hover:bg-primary-hover" }


  switch (color) {
    case 'secondary': background = "bg-secondary hover:bg-secondary-hover"
      break
    case 'danger': background = "bg-red-primary hover:bg-red-primary-hover"
      break
    default: background = "bg-primary hover:bg-primary-hover"
  }


  switch (theme) {
    case 'small':
      return (
        <div>
          <button className={`${className} ${background} px-4 py-2 uppercase shadow-x1 text-white text-xs font-medium animate`}>
            {children}
          </button>
        </div>
      )
    case 'big':
      return (
        <div>
          <button className={`${className} ${background} px-8 py-4 uppercase shadow-x1 text-white text-sm font-medium animate`}>
            {children}
          </button>
        </div>
      )
    default:
      return (
        <div>
          <button className={`${className} ${background} px-4 py-3 uppercase shadow-x1 text-white text-sm font-medium animate`}>
            {children}
          </button>
        </div>
      )
  }
}