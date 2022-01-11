import { List, Typography } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";

const Review = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log("review basket", basket);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Sumary
      </Typography>
      <List disablePadding>{getBasketTotal(basket)}</List>
    </>
  );
};

export default Review;
