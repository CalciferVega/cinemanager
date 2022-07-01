import { useState } from "react"
import MovieHeader from "../../components/MovieHeader";
import BackButton from "../../components/BackButton"
import TicketItem from "../../components/TicketItem"
import NextButton from "../../components/NextButton"
import getTickets from "../../services/getTickets"

export default function Tickets() {
  const tickets = getTickets();
  const [total, setTotal] = useState(0);
  

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
          <MovieHeader movieName={"Top gun Maverick"} date={'Sunday 2, July 2022'}  hour={'17:30'}/>
          <div className="tickets-conteiner grid gap-4 w-full mt-4">
            {tickets.map((ticket) => {
              return <TicketItem ticket={ticket} key={ticket.id} handleSelectTicket={handleSelectTicket}/>
            })}
          </div>
          </div>
          <div className="tickets-footer flex justify-between items-center mt-16 pt-4 px-2">
            <strong className="text-xl">Total:</strong> <span className="text-xl">$ {total.toFixed(2)}</span>  
          </div>
          <NextButton to={"/selectseats"} action={'Next'} />
        </div>
    </>
  )
}