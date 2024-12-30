import React from 'react'

interface logoprops extends React.HTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}
const logo : React.FC<logoprops> = () => {
  return (
    <div>
        <img src="https://i.ibb.co/7YW4p8R/logo.png" alt="logo" />
    </div>
  )
}

export default logo;
