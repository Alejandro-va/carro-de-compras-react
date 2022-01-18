const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

//clave privada
const stripe = new Stripe(
  "sk_test_51KHAPQB6kTSOfURr3nd4mMuqUdentQMMCGEsaco5h4846OKOPkYmHQf721SAglBBIcXvM2TXzO7JxEK7x1lOAyqL00QYWEMML5"
);

const app = express();

//middleware
app.use(cors({ origin: "http://localhost:3000" })); //escucha todo lo q venga de local host
app.use(express.json()); //interpreta todos los json
//-----------------------------

app.post("/api/checkout", async (req, res) => {
  console.log(req.body);
  //res.send("recibido");
  const { id, amount } = req.body; //desestruturo el body
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Basket of products",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    return res.status(200).json({ message: "Successful payment" });
  } catch (error) {
    // return console.log(error);
    return res.json({ message: error.raw.message });
  }
});

app.listen(3001, () => console.log("Server listening port", 3001));
