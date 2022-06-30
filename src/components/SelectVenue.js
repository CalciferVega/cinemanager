export default function SelectVenue({handleSelectVenue}) {
    return(
        <div className="select-venue mt-6 mb-3" onClick={() => handleSelectVenue()}>
            <button className="btn-select-venue pl-4" >
              <img className="venue-icon inline" src="/assets/place.svg"/>  Select Venue <img className="inline" src="/assets/expand_more.svg"/> 
            </button>
        </div>
    )
}