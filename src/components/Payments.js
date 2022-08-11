
export default function PaymentItem({payment, handleSelectPayment, selected}) {
    const {id, name } = payment;
    const check = selected === id ? true : false;

    
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