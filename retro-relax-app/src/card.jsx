import { useState } from 'react'

function Card({ cassette, onPlay }) {
  let Play_OnClick = () => {
    onPlay()
    console.log("Play me " + cassette)
  }

  

  return (
    <div className="card col-md-3">
      <div className="card-body">
        <h5 className="card-title text-nowrap">{cassette.title}</h5>
        <a disabled={cassette.enabled} href="#" className="btn btn-primary" onClick={Play_OnClick}>Play</a>
      </div>
    </div>
  )
}



export default Card
