import React from "react"

export default function Cards(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.imageUrl} width="125px"/>
            <div className="card-data">
                <div className="card-location-container">
                    <i className="fa-sharp fa-solid fa-location-dot red"></i>
                    <span className="card-location"> {props.location}</span>
                    <a className="card-google-url" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <p className="card-dates">{props.startDate} - {props.endDate}</p>
                <p className="card-desc">{props.description}</p>
            </div>
        </div>
    )
} 

