import { useCassette } from "./cassetteContext";
import cassetteImage from "./assets/cassette-tape.png";
import { useState } from "react";

function Card({ cassette }) {
  const { setSelectedCassette } = useCassette();
  const [isShaking, setIsShaking] = useState(false);

  const onClick = () => {
    console.log("onclick " + cassette.title);
    setSelectedCassette(cassette);

     // Trigger shake animation
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 350); // match animation duration
  };

  return (
    <div
      className={
        "col-12 col-sm-6 col-md-4 col-lg-3 flex" 
        + (cassette.isEnabled ? "" : " cassette-disabled") 
        + (isShaking ? " shake" : "")
      }
    >
      <div
        className="media-card flex flex-col p-4 w-full cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={onClick}
      >
        <div className="cassette-wrapper relative">
          <img src={cassetteImage} alt="Cassette tape" className="cassette-base" />
          <div className="cassette-label">{cassette.title}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;