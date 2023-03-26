import React from "react";
import "../styles/image.css";

export default function Image(){
    return(
        <div className="image-tag">
            <img src="/square.png" alt="" className="header-img" width="53.33px"/>
            <p className="header-text">Lorem ipsum dolor sit amet</p>
        </div>
    )
}