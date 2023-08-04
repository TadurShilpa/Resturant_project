import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/CartContext";

const MealItemForm = ({ data }) => {
  const { name, description, price } = data;
  const ctx = useContext(CartContext);

  const addItemHandler = (event) => {
    const amount = event.target.amountName.value;
    event.preventDefault();
    ctx.addItem({ amount, name, description, price });
    //console.log(amount, name, description, price);
  };
  //console.log(data);

  return (
    <form className={classes.form} onSubmit={addItemHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          name: "amountName",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
