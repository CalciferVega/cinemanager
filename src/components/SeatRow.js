import { useId, useState } from "react";

export default function SeatRow({seat, handleSelectSeat}) {
    let id = useId();
    return (
        <div className="seats-grid-body-seats-row grid grid-cols-10 gap-2">
            {seat.map((seatItem, index) => (
                seatItem === 1 ? 
                <img key={id+index} id={index} className="mt-2" src="../assets/seat_avaible.png" alt="seat" onClick={(event) => handleSelectSeat(event)} /> :
                <img key={id+index} className="mt-2" src="../assets/seat_reserved.png" alt="seat" />
            ))}
        </div>
    )
}