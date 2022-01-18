import { Divider, Typography, Button } from "@material-ui/core";
import React from "react";
import Review from "./Review";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
//redux
import { useStateValue } from "../../StateProvider";
import { actionTypes, getBasketTotal } from "../../reducer";
//formato de numeros
import accounting from "accounting";

import axios from "axios";

//vinculacion con la clave publica de stripe
/* const stripePromise = loadStripe(
  "sk_test_51KHAPQB6kTSOfURr3nd4mMuqUdentQMMCGEsaco5h4846OKOPkYmHQf721SAglBBIcXvM2TXzO7JxEK7x1lOAyqL00QYWEMML5"
); */

const stripePromise = loadStripe(
  "pk_test_51KHAPQB6kTSOfURrAxViN4semFIsNRpQcrsRdtNjxqg9mpBNrJeMv7Ea3S6XYuwo3FEvEexcMMQ613Y1LcRy7fru00Twad7H4u"
);

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "rgb(240,57,122)",
      color: "#333",
      fontSize: "18px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

//creo el componente form aca mismo
//COMPONENTE FORM
const CheckoutForm = ({ backStep, nextStep }) => {
  const [{ basket, paymentMessage }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    //console.log(paymentMethod);
    //amount requiere que las cantidaddes deçse envien en centimos, por eso lo multiplico por cien
    if (!error) {
      console.log("s");
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://localhost:3001/api/checkout",
          {
            //este objeto es el body q recibe el servidor como req.body
            id,
            amount: getBasketTotal(basket) * 100,
          }
        );
        //alert(data.message);
        console.log("data", data);
        dispatch({
          type: actionTypes.SET_PAYMENT_MESSAGE,
          paymentMessage: data.message,
        });
        elements.getElement(CardElement).clear();
        nextStep();
        //console.log(data);
      } catch (error) {
        console.log(error);
        nextStep();
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Button variant="outlined" onClick={backStep}>
          Back
        </Button>
        <Button
          onClick={nextStep}
          variant="contained"
          color="primary"
          type="submit"
          disabled={!stripe}
        >
          {`Pay ${accounting.formatMoney(getBasketTotal(basket), "$")}`}
        </Button>
      </div>
    </form>
  );
};

//COMPONENTE DEL SCRIPT
const PaymentForm = ({ backStep, nextStep }) => {
  return (
    <>
      <Review />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <CheckoutForm backStep={backStep} nextStep={nextStep} />
      </Elements>
    </>
  );
};

export default PaymentForm;
