import React from "react" 
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./Data"
export default function App() {
  console.log(Data)
  const cdata = Data.map(item => {
    return (<Card 
    key={item.id}
    item={item}
    // img={item.coverImg}
    // rating={item.stats.rating}
    // reviewCount={item.stats.reviewCount}
    // location={item.location}
    // title={item.title}
    // price={item.price}
    // openSpots={item.openSpots}
    />)
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-list">
        {cdata}
      </div>
    </div>
  )
}