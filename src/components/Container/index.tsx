import React from "react";
import "./style.css"; 

interface Props {
    children: React.ReactNode
}

export default function Container({ children } : Props) {
  return (
    <div className="wrapper">
        {children}
    </div>
  )
}
