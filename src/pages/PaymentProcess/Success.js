import { useState } from "react";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import MovieHeader from "../../components/MovieHeader";
import PaymentItem from "../../components/Payments";
import { useEffect } from "react";


export default function Success() {
  
  const paymentMethods = {
      id: 1,
      name: 'Credit Card',
      icon: 'credit-card',
      description: 'Pay with your credit card',
      selected: true
  }

  let [selectedPayment, setSelectedPayment] = useState(paymentMethods);


    const handleSelectPayment = (event) => {
      event.stopPropagation()
      const id = event.target.id
      const classListItem = event.target.classList
      console.log(classListItem)
    
      if (classListItem.contains("selected")) {
        classListItem.remove("selected")
        let res = selectedPayment.find((payment) => payment.id === Number(id))
        console.log(res)
      } else {
        document.querySelectorAll('.selected').forEach(item => {
          item.classList.remove("selected")
        })
        classListItem.add("selected")
        setSelectedPayment(selectedPayment.find((payment) => payment.id === id).selected = true)
        console.log(selectedPayment)
      }
    }
 
  useEffect(() => {
    console.log(selectedPayment);
  }, [selectedPayment])
  
  return (
    <>
    <div className="tickets-container">
        <div className="tickets-header">
          <div className="tickets-header-title flex justify-items-start">
            <BackButton /><h1 className="ml-1 pt-2 text-2xl">Thank! </h1>
          </div>
        </div>
        <div className="tickets-body w-full mt-4">
          <p className="mb-4">Enjoy the movie</p>
          <MovieHeader movieName={"Top gun Maverick"} date={'Sunday 2, July 2022'}  hour={'17:30'}/>
        </div>
        <div className="tickets-footer w-full mt-4">
          <img src='/assets/frame.png' alt="frame" className="w-full" />
        </div>
        <NextButton to={"/"} action={'Return to home'} />
    </div>
    </>
  )
}