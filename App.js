import React from "react"
import Nav from "./components/Nav"
import Cards from "./components/Cards"

import data from "./data"

export default function App() {
    const cardData = data.map(function(item) {
        return (
            <Cards
            key= {item.title}
            {...item}
            />
        )
    })
        
    return (
        <div>
            <Nav />
            {cardData}
        </div>
    )
}