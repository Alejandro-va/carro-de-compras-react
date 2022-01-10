/* import { useFormContext, Controller } from "react-hook-form";
import { Grid, TextField } from "@material-ui/core";

const AddressInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            fullWidth
            defaultValue=""
            name={name}
            label={label}
            required={required}
            value={value}
            onChange={onChange}
          />
        )}
      />
    </Grid>
  );
};

export default AddressInput; */

/* 
import { Grid, Typography, Button } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import AddressInput from "./AddressInput";
import { Link } from "react-router-dom";

const AddressForm = () => {
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
          <Grid container spacing={3}>
            <AddressInput required name="firstName" label="First Name" />
            <AddressInput required name="lastName" label="Last Name" />
            <AddressInput required name="address1" label="Address" />
            <AddressInput required name="email" label="Email Address" />
            <AddressInput required name="city" label="City" />
            <AddressInput required name="postCode" label="Post Code" />
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
       
            <Button component={Link} to="/checkout-page">
              Back to the Checkout Page
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm; */
