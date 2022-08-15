import BackButton from "../../components/BackButton";
import getMovie from "../../services/getMovie";
import { useState } from "react";
import VideoModal from "../../components/VideoModal";

export default function Movie() {
  const idMovie = Number(window.location.pathname.split("/")[2]);
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => {
    localStorage.removeItem("MOVIE_SELECTED");
    localStorage.setItem("MOVIE_SELECTED", idMovie);
    window.location.assign("/selecttotal");
  }

  const movie = getMovie(idMovie);
  const openVideo = () => {
    setShowModal(true);
  }
  const closeVideo = () => {
    setShowModal(false);
  }
  console.log(movie);
  return (
    <>
    <div className="movie-container">
      <div className="movie-header">
        <BackButton sticky={true} />
        <img src={movie.image} alt="Top Gun" />
      </div>
      <div className="movie-body">
        <div className="movie-body-header">
          <h1 className="mb-4">{movie.name}</h1>
          <section className="mb-2 flex justify-between">
            <span className="text-gray-600">
              1h 30m | Action
            </span>
            <button className="watch-button" onClick={openVideo}>
              <img src="../assets/watchtrailer.svg" alt="Play" className="inline-block mr-2" />
              Watch trailer
            </button>
            
          </section>
          <hr className="border-blue" />
          <section className="mb-8">
            <span className="text-gray-600">
              {movie.description}
            </span>
          </section>
          <section className="mb-8">
          <h3 className="mb-4">Choose Date</h3>
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
    {showModal && <VideoModal url={movie.trailer} handleClose={closeVideo}/>}
    </>
  )
}