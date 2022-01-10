import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import AddressInput from "./AddressInput";
import { Link } from "react-router-dom";

const AddressForm = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Controller
            control={control}
            render={({ field }) => (
              <TextField fullWidth defaultValue="" name="ddd" label="ffff" />
            )}
          />
          {/*        <AddressInput required name="firstName" label="First Name" />
           <AddressInput required name="lastName" label="Last Name" />
          <AddressInput required name="address1" label="Address" />
          <AddressInput required name="email" label="Email Address" />
          <AddressInput required name="city" label="City" />
          <AddressInput required name="postCode" label="Post Code" /> */}
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
