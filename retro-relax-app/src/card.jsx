import { useState } from 'react'

function Card({ cassette, onPlay }) {
  let Play_OnClick = () => {
    onPlay()
    console.log("Play me " + cassette)
  }


  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
      <div className="media-card flex flex-col p-4 w-full">
        <img src={cassette.image} className="media-thumbnail mb-4" />
          <h5 className="text-lg font-bold text-gray-900 mb-2">{cassette.title}</h5>
          <button type='button' href="#" 
          className="btn-play" onClick={Play_OnClick}>Play</button>
      </div>
    </div>
  )
}



export default Card
