export const initialState = {
  basket: [],
  user: null,
  shippingData: {},
  paymentMessage: "",
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_SHIPPINGDATA: "SET_SHIPPINGDATA",
  SET_PAYMENT_MESSAGE: "SET_PAYMENT_MESSAGE",
};

//ACUMULADOR(reduce):ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
//array.reduce((acumulador, producto)=>precio producto + acumulador, 0)
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_ITEM":
      //para n borrar todos los elementos del carro con el mismo id , tomo el valor del indice q ocupa el elemento dentro del array
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket]; //creo una copia del estado
      if (index >= 0) {
        newBasket.splice(index, 1); //El método splice permite eliminar componentes, insertar componentes
      } else {
        console.log("Cant remove product");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: action.basket,
      };
    case "SET_SHIPPINGDATA":
      return {
        ...state,
        shippingData: action.shippingData,
      };
    case "SET_PAYMENT_MESSAGE":
      return {
        ...state,
        paymentMessage: action.paymentMessage,
      };
    default:
      return state;
  }
};
export default reducer;
