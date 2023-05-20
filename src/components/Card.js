import React from "react"
import Star from "../assets/Star.png"
export default function Card(props) {
    let cardBadge
    if (props.item.openSpots === 0) 
        cardBadge = "SOLD OUT"
    else if(props.item.location === "Online")
        cardBadge = "ONLINE"
    return (
        <div className="Card">
            {cardBadge&& <div className="card-badge">{cardBadge}</div>}
            <img src={props.item.coverImg} alt="Katie" className="katie-photo"/> <br />
            <div className="card-status">
                <img src={Star} alt="Star" className="star-photo" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">
                {props.item.title}
            </p>
            <p>
                <b>From ${props.item.price}</b> / person
            </p>
        </div>
    )
}