import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
//redux
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
//formato de numeros
import accounting from "accounting";

const Review = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log("review basket", basket);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Sumary
      </Typography>
      <List disablePadding>
        {basket?.map((product) => (
          <ListItem key={product.name}>
            <ListItemText primary={product.name} secondary={`Qty : ${1}`} />
            <Typography variant="body2">
              {accounting.formatMoney(product.price, "$")}
            </Typography>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1">
            {accounting.formatMoney(getBasketTotal(basket), "$")}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
