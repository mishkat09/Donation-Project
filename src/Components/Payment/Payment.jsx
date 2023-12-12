import axios from "axios";
import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const Payment = () => {
    const cart = useLoaderData()
    const extractPrice = (priceString) =>
    parseFloat(priceString.replace("$", ""));

  const totalPrice = cart.reduce(
    (acc, item) => acc + extractPrice(item.price),
    0
  );

    const setTotalPrice = totalPrice.toFixed(2);

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handlePay = (e) => {
    e.preventDefault();
    const form = e.target;
    const cardNumber = form.number.value;
    const cardName = form.name.value;
    const cardExpiry = form.expiry.value;
    const card = { cardNumber, cardName, cardExpiry };
    axios.post("http://localhost:5000/payment", card).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          title:  `Payment ${setTotalPrice} Successfull`,
          text: "Thank You for your Payment",
          icon: "success",
        });
        
      }
      form.reset();
    });
  };
  return (
    <div className="container mx-auto"> 
      <h1 className="text-3xl font-bold text-center my-8">Pay Here</h1>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
        <div>
            <h1 className="text-lg font-medium">Your Total Donation: ${setTotalPrice}</h1>
        </div>
      <form className="card-body" onSubmit={() => handlePay(event)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Account Number</span>
          </label>
          <input
            type="number"
            name="number"
            placeholder="Account Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Account Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Card Name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Card Password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Validity</span>
          </label>
          <input
            type="month"
            name="expiry"
            placeholder="Card Expiry"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Pay</button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
