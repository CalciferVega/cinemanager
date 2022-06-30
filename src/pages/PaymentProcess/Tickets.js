import BackButton from "../../components/BackButton"
import getTickets from "../../services/getTickets"
import TicketItem from "../../components/TicketItem"
import { useState } from "react"

export default function Tickets() {
  const tickets = getTickets();
  //const ticketPrices = tickets.map(ticket => {ticket.price, ticket.id});
  const [total, setTotal] = useState(0);
  

  const handleNext = () => {
    window.location.assign("/selectseats");
  }
  const handleSelectTicket = (price, action) => {
    if(action === "decrement") {
      setTotal(total - price);
    }
    if(action === "increment") { 
      setTotal(total + price);
    }
  }

  
  return (
    <>
      <div className="tickets-container">
        <div className="tickets-header">
          <div className="tickets-header-title flex justify-items-start">
            <BackButton /><h1 className="ml-1 pt-2 text-2xl">Choose Tickets</h1>
          </div>
        </div>
        <div className="tickets-body w-full mt-4">
          <div className="tickets-body-header">
            <h2 className="mb-2">Top Gun Maverick</h2>
            <span className="mt-2 block">Sunday 2, July 2022  | 17:30</span>
          </div>
          <div className="tickets-conteiner grid gap-4 w-full mt-4">
            {tickets.map((ticket) => {
              return <TicketItem ticket={ticket} key={ticket.id} handleSelectTicket={handleSelectTicket}/>
            })}
          </div>
          </div>
          <div className="tickets-footer flex justify-between items-center mt-16 pt-4 px-2">
            <strong className="text-xl">Total:</strong> <span className="text-xl">$ {total.toFixed(2)}</span>  
          </div>
          <button className="next-btn" onClick={handleNext}>
            Next
          </button>
        </div>
    </>
  )
}