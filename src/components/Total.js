import React from "react";
import accounting from "accounting";
import { Button, makeStyles } from "@material-ui/core";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider"; //para consmir un dato
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  },
  button: {
    marginTop: "2rem",
  },
}));

const Total = () => {
  const classes = useStyles();
  /* exported global_var */
  const [{ basket }, dispatch] = useStateValue(); //para consmir un dato
  return (
    <div className={classes.root}>
      <h5>Total items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket), "$")}</h5>
      {/* min 3.13 */}

      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          Check out
        </Button>
      </Link>
    </div>
  );
};

export default Total;
