import { useState, useEffect } from "react";

export default function PaymentItem({payment, handleSelectPayment}) {
    const {id, name, selected } = payment;
    const [check, setCheck] = useState(selected);

    let itemDefaulClasses = 'tickets-item tickets-item flex justify-between rounded-lg border border-white py-2 px-4 mt-2 items-center';
    return (
        <button className={`${itemDefaulClasses} ${check ? 'selected': null}`} id={id} onClick={(event) => handleSelectPayment(event) }>
              { check ? 
              <img src="../assets/checked.png" alt="checked" className="w-4 h-4" /> 
              : <img src="../assets/unchecked.png" alt="unchecked" className="w-4 h-4" />}
              
              {name}
            
            </button>
    );
}