import React from "react";
import Text from "./Text";
import Card from "./Card";
import '../styles/section.css';

export default function Section(){
    return(
        <div className="section-container">
            <Text />
            <Card />
        </div>
    )
}