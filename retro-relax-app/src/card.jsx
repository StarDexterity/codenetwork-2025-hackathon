import { useCassette } from "./cassetteContext";

function Card({ cassette }) {
  const { selectedCassette, setSelectedCassette } = useCassette();

  const onClick = () => {
    console.log('onclick ' + cassette.title)
    setSelectedCassette(cassette)
  }

  return (
    <div className={"col-12 col-sm-6 col-md-4 col-lg-3 flex" + (cassette.isEnabled ? "" : " cassette-disabled")}>
      <div className="media-card flex flex-col p-4 w-full">
        {cassette?.image != null ? <img src={cassette.image} className="media-thumbnail mb-4" />
          : <div className="media-thumbnail mb-4"></div>
        }
        <h5 className="text-lg font-bold text-gray-900 mb-2 text-nowrap">{cassette.title}</h5>
        <button type='button' href="#"
          className="btn-play" onClick={onClick}>Play</button>
      </div>
    </div>
  )
}

export default Card
