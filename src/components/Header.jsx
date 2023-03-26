import React from "react";
import Image from "./Image";
import '../styles/header.css';

export default function Header(){
    return(
        <header>
            <div className="header-main">
                <h1 className="header-title">Be better at DSA & CP</h1>
                <p className="header-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className="header-buttons not-visible">
                <button className="header-joinus">Join now <img src="/right-arrow-blue.png" alt="" max-width="100%"/></button>
                <button className="header-view">View Curriculum</button>
                </div>
            
                <div className="image-container">
                    <div className="image-1">
                        <Image />
                        <Image />
                    </div>
                    <div className="image-1">
                        <Image />
                        <Image />
                    </div>
                </div>
                <div className="header-buttons visible">
                    <button className="header-joinus">Join now <img src="/right-arrow-blue.png" alt="" max-width="100%"/></button>
                    <button className="header-view">View Curriculum</button>
                </div>
            </div>
            <div className="header-logo">
                <img src="/header-main.png" alt="" className="header-logo-image"/>
            </div>
        </header>
    )
}