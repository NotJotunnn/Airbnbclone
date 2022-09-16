import React from "react";
import gallery from "../assets/Gallerygrid.png";

export default function Hero() {
    return (
        <header>
            <img src={gallery} alt="picture gallery" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </header>
    )
}