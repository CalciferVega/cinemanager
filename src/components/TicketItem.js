import { useState } from "react";

export default function TicketItem({ticket, handleSelectTicket}) {
    const {id, name, price, maxQuantity} = ticket;
    
    const [selected, setSelected] = useState(0);

    const handleDecrement = () => {
        if(selected > 0) {
            setSelected(selected - 1);
            handleSelectTicket(price, "decrement");
        }
    }
    const handleIncrement = () => {
        if(selected < maxQuantity) {
            setSelected(selected + 1);
            handleSelectTicket(price, "increment");
        }
    }
    return (
        <div className="tickets-item flex justify-between rounded-lg border border-white py-2 px-4 mt-2 items-center">
              <p>{name}</p>
              <p>$ {price.toFixed(2)}</p>
              <div className="tickets-item-quantity flex items-center">
                <button className="tickets-item-quantity-button m-2" value={'decrement'} price={price} onClick={handleDecrement}>
                  <img src="../assets/remove.svg" alt="-" />
                </button>
                  <span className="tickets-item-quantity-number w-6 text-center" >
                  { selected }
                </span>
                <button className="tickets-item-quantity-button m-2" value={'increment'} price={price} onClick={handleIncrement}>
                  <img src="../assets/add.svg" alt="-" />
                </button>
              </div>
            </div>
    );
}