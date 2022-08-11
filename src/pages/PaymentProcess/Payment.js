import { useState } from "react";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import MovieHeader from "../../components/MovieHeader";
import PaymentItem from "../../components/Payments";
import { useEffect } from "react";
import getMovie from "../../services/getMovie";

export default function Payment() {
  const movieId = Number(localStorage.getItem("MOVIE_SELECTED"));
  const movie = getMovie(movieId);
  const paymentMethods = [
    {
      id: 1,
      name: "Credit Card",
      icon: "credit-card",
      description: "Pay with your credit card",
      selected: true,
    },
    {
      id: 2,
      name: "Debit Card",
      icon: "credit-card",
      description: "Pay with your debit card",
      selected: false,
    },
    {
      id: 3,
      name: "Paypal",
      icon: "paypal",
      description: "Pay with your paypal account",
      selected: false,
    },
    {
      id: 4,
      name: "Bitcoin",
      icon: "bitcoin",
      description: "Pay with your bitcoin account",
      selected: false,
    }
  ];
  let [selectedPayment, setSelectedPayment] = useState(paymentMethods);


    const handleSelectPayment = (event) => {
      event.stopPropagation();
      const id = event.target.id;
      const classListItem = event.target.classList;
      console.log(classListItem);
    
      if (classListItem.contains("selected")) {
        classListItem.remove("selected");
        let res = selectedPayment.find((payment) => payment.id === Number(id));
        console.log(res)
      } else {
        document.querySelectorAll('.selected').forEach(item => {
          item.classList.remove("selected");
        });
        classListItem.add("selected");
        setSelectedPayment(selectedPayment.find((payment) => payment.id === id).selected = true);
        console.log(selectedPayment);
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
            <BackButton /><h1 className="ml-1 pt-2 text-2xl">Choose Payment</h1>
          </div>
        </div>
        <div className="tickets-body w-full mt-4">
          <MovieHeader movieName={movie.name} date={'Sunday 2, July 2022'}  hour={'17:30'}/>
        </div>
        <div className="tickets-conteiner grid gap-4 w-full mt-4">
        {selectedPayment.map((payment) => {
              return <PaymentItem payment={payment} key={payment.id} selected={payment.selected} handleSelectPayment={handleSelectPayment}/>
            })}
        </div>

        <NextButton to={"/success"} action={'Next'} />
    </div>
    </>
  )
}