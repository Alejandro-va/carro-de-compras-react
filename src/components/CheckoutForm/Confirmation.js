import { Button, Divider, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Confirmation = ({ message }) => {
  console.log("aja", message);
  return (
    <>
      <Typography variant="h6">{message}En edición</Typography>
      <Divider />
      <Button component={Link} to="/" variant="outlined">
        Back to Home Page
      </Button>
    </>
  );
};

export default Confirmation;
