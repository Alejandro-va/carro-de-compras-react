import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
//import products from "../product-data";
//import Product from "./Product";
import CheckoutCard from "./CheckoutCard";
import { useStateValue } from "../StateProvider"; //para consmir un dato

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
}));

const CheckoutPag = () => {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue(); //para consmir un dato

  function FormRow() {
    return (
      <React.Fragment>
        {basket?.map((elemt) => (
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <CheckoutCard key={elemt.id} productsCommerce={elemt} />
            {console.log(elemt.id)}
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
          {/* grid anidado  con la funcion arriba, son prductos*/}
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            <Total />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPag;
/*       <Grid container spacing={2}>
        {products.map((el) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Product key={el.id} productsCommerce={el} />
          </Grid> */
