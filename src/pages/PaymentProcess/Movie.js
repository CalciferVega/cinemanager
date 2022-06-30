import BackButton from "../../components/BackButton";

export default function Movie() {
  const handleNext = () => {
    window.location.assign("/selecttotal");
  }
  return (
    <div className="movie-container">
      <div className="movie-header">
        <BackButton sticky={true} />
        <img src="../movies/top-1.png" alt="Top Gun" />
      </div>
      <div className="movie-body">
        <div className="movie-body-header">
          <h1 className="mb-2">Top Gun Maverick</h1>
          <section className="mb-2 flex justify-between">
            <span className="text-gray-600">
              1h 30m | Action
            </span>
            <button className="watch-button">
              <img src="../assets/watchtrailer.svg" alt="Play" className="inline-block mr-2" />
              Watch trailer
            </button>
            
          </section>
          <hr className="border-blue" />
          <section className="mb-2">
          <h3 className="mb-2">Choose Date</h3>
           <button className="date-button">
             <span>
               Today
             </span>
             <strong>
              Sunday 2, July 2022
            </strong>
              <img src="../assets/expand_more_right.svg" alt="Calendar" />
            </button>
          </section>

          <section className="select-time">
            <h3 className="mb-4 mt-8">Select an option</h3>
            <div className="select-time-container">
              <h4 className="mb-2">IMAX</h4>
              <button className="select-time-item selected">
                 12:00
              </button>
              <button className="select-time-item">
                  1:00
              </button>
              <button className="select-time-item">
                  2:00
              </button>
              <button className="select-time-item">
                  3:00
              </button>
              <button className="select-time-item">
                  4:00
              </button>
              <button className="select-time-item">
                  5:00
              </button>
            </div>
          </section>

        <button className="next-btn" onClick={handleNext}>
          Next
        </button>
        </div>
      </div>
    </div>
  )
}