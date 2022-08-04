import BackButton from "../../components/BackButton";
import MovieHeader from "../../components/MovieHeader";
import NextButton from "../../components/NextButton";
import SeatsGrid from "../../components/SeatsGrid";
import getSeats from "../../services/getSeats";

const handleSelectSeat = (event) => {
    console.log(event.target);
    if(event.target.src.includes('avaible')){
        event.target.src = "../assets/seat_selected.png";
    } else {
        event.target.src = "../assets/seat_avaible.png";
    }
}

let dato = getSeats()

export default function Seats() {
    return (
        <div className="tickets-container">
            <div className="seats">
            <div className="tickets-header-title flex justify-items-start">
                <BackButton /><h1 className="ml-1 pt-2 text-2xl">Choose Tickets</h1>
            </div>
            <div className="tickets-body w-full mt-4">
                <MovieHeader movieName={"Top gun Maverick"} date={'Sunday 2, July 2022'}  hour={'17:30'}/>
                <img className="mt-8"  src="../assets/screen.png" alt="screen" />
                <SeatsGrid seats={dato} handleSelectSeat={handleSelectSeat} />
            </div>
            </div>
            <NextButton to={"/payment"} action={'Next'} />
        </div>
                
    )
}