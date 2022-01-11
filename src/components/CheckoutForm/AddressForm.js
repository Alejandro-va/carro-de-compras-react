import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
//import AddressInput from "./AddressInput";
import { Link } from "react-router-dom";

//estas 2 lineas simpre qvasmo a usar dispatch
import { useStateValue } from "../../StateProvider"; //para consmir un dato
import { actionTypes } from "../../reducer";

const AddressForm = ({ nextStep }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      address1: "",
      email: "",
      city: "",
      postCode: "",
    },
  }); //tomo el valor del name de los input

  const [{ shippingData }, dispatch] = useStateValue(); //para consmir un dato

  const onSubmit = (data) => {
    //console.log(data);
    dispatch({
      type: actionTypes.SET_SHIPPINGDATA,
      shippingData: data,
    });
    nextStep();
  };
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="firstName"
                  /*  defaultValues="" */
                  required
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <TextField fullWidth label="Last Name" required {...field} />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="address1"
              render={({ field }) => (
                <TextField fullWidth label="Address" required {...field} />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Email Address"
                  required
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="city"
              render={({ field }) => (
                <TextField fullWidth label="City" required {...field} />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="postCode"
              render={({ field }) => (
                <TextField fullWidth label="Post Code" required {...field} />
              )}
            />
          </Grid>
        </Grid>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          {/* es lo mismo meter el boton dentro de un link que darle el componente link */}
          <Button component={Link} to="/checkout-page">
            Back to the Checkout Page
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddressForm;
