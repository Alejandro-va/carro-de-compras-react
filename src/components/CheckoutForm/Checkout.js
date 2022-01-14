import React, { useState } from "react";
import { Paper, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";
import { useStateValue } from "../../StateProvider";

const Checkout = () => {
  const classes = useStyles();
  const [activateStep, setActivateStep] = useState(0);
  const [{ paymentMessage }, dispatch] = useStateValue();
  const steps = ["Shipping address", "Payment details"];

  const nextStep = () =>
    setActivateStep((preActivateStep) => preActivateStep + 1);

  const backStep = () =>
    setActivateStep((preActivateStep) => preActivateStep - 1);

  //componente FORM
  const Form = () =>
    activateStep === 0 ? (
      <AddressForm nextStep={nextStep} />
    ) : (
      <PaymentForm backStep={backStep} nextStep={nextStep} />
    );

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          {/* numero de paso */}
          <Stepper activeStep={activateStep} className={classes.stepper}>
            {steps.map((el) => (
              <Step key={el}>
                <StepLabel>{el}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/*Form componente hecho por mi arriba */}
          {
            //si activateStep es igual al ultimo paso o numero
            activateStep === Step.length ? (
              <Confirmation message={paymentMessage} />
            ) : (
              <Form step={activateStep} />
            )
          }
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
