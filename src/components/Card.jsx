import React from "react";
import '../styles/card.css';

export default function Card(){
    return(
        <div className="card-container">
        <div className="card-top">
            <div className="card-top-text">
                <h4 className="card-title">Premium Victory Batch</h4>
                <h6 className="card-line-through">₹19,999</h6>
                <h6 className="card-blue">₹13,999</h6>
            </div>
            <img src="/logo-blur.png" alt=""  max-width= "100%" className="logo-logo"/>
        </div>
        <div className="card-bottom">
            <div className="set">
                <img src="/square.png" alt="" className="set-img" width="66.66px"/>
                <p className="set-text">100+ Hrs Live Content</p>
            </div>
            <div className="set">
                <img src="/square.png" alt="" className="set-img" width="66.66px"/>
                <p className="set-text">50+ Hrs Contest</p>
            </div>
            <div className="set">
                <img src="/square.png" alt="" className="set-img" width="66.66px"/>
                <p className="set-text">500+ Problems</p>
            </div>
            <div className="set">
                <img src="/square.png" alt="" className="set-img" width="66.66px"/>
                <p className="set-text">Includes an interview bootcamp and access to a mentor network</p>
            </div>
            <div className="set">
                <img src="/square.png" alt="" className="set-img" width="66.66px"/>
                <p className="set-text">Enjoy access to our content for one year (paid extensions available)</p>
            </div>
            <div className="set">
                <img src="/square.png" alt="" className="set-img" width="66.66px"/>
                <p className="set-text">Flexible payment options, including no-cost EMI, are available.</p>
            </div>

            <button className="card-joinus">Join now <img src="/right-arrow-blue.png" alt="" width="18.33px"/></button>

        </div>
    </div>
    )
}