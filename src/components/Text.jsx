import React from "react";
import Square from "./Square";
import '../styles/text.css'

export default function Text(){
    return(
    <div className="text-container">
        <div className="text-first">
            <div className="text-title">
                <h1 className="text-title-1">Invest in skills, paid.</h1>
                <h1 className="text-title-2"><span className="blue">earn 10X </span>of what you</h1>
                <h1 className="text-title-3">paid.</h1>
            </div>

            <p className="text-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="text-second">
            <div className="img-1">
                <div className="rec-1">
                    <Square />
                    <div className="text">
                        <h1 className="bold">1.2 Cr/Year</h1>
                        <p>highest fresher package</p>
                    </div>
                </div>
                <div className="rec-1">
                    <Square />
                    <div className="text">
                        <h1 className="bold">Multiple &lt;100 Ranks</h1>
                        <p>in kickstart last year</p>
                    </div>
                </div>
            </div>
            <div className="img-1">
                <div className="rec-1">
                    <Square />
                    <div className="text">
                        <h1 className="bold">1000+ Offers</h1>
                        <p>from top companies</p>
                    </div>
                </div>
                <div className="rec-1">
                    <Square />
                    <div className="text">
                        <h1 className="bold">Trusted by IITians</h1>
                        <p>for their career prep</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}