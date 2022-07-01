import SeatRow from './SeatRow';
import { useId } from 'react';

export default function SeatsGrid({seats, handleSelectSeat}) {
    console.log(seats);
    let id = useId();
    return (
        <div className="seats-grid mt-8">
            <div className="seats-grid-body">
                <div className="seats-grid-body-seats grid grid-rows-10 gap-4 pb-20 ">
                    {seats.map((seat, index) => (
                    <SeatRow key={id+index} seat={seat.row} handleSelectSeat={handleSelectSeat} />
                    ))}
                </div>
            </div>
        </div>
    )
}