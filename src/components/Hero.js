import React from "react"
import Group from "../assets/Group.png"

export default function Hero() {
    return (
        <div className="Hero">
            <img src={Group} alt="Group" className="Group-photo" />
            <br />
            <h1>
                Online Experiences
            </h1>
            <br />
            <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}