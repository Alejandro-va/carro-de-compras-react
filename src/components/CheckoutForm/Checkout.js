import React, { useState } from "react";
import { Paper, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

const Checkout = () => {
  const classes = useStyles();
  const [activateStep, setActivateStep] = useState(0);
  const steps = ["Shipping address", "Payment details"];

  const nextStep = () =>
    setActivateStep((preActivateStep) => preActivateStep + 1);

  const backStep = () =>
    setActivateStep((preActivateStep) => preActivateStep + 1);

  //componente FORM
  const Form = () => (activateStep === 0 ? <AddressForm /> : <PaymentForm />);

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((el) => (
              <Step key={el}>
                <StepLabel>{el}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
        {/*Form componente hecho por mi arriba */}
        <Form />
      </main>
    </>
  );
};

export default Checkout;
