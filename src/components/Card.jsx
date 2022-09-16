import React from "react";
import star from "../assets/Star 1.png";
import picture from "../assets/katiezaferes.png";


export default function Card() {
    return (
        <section className="section--cards">
            <section className="card">
                <img src={picture} alt="picture of katie" />
                <div className="rating">
                    <p><img src={star} alt="star" />5.0 <span className="grayout">&#x28;6&#x29; • USA</span></p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span>/person</p>
            </section>
        </section>
    )
}
