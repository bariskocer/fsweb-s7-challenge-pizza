import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import PizzaSize from "./PizzaSize";
import PizzaCrust from "./PizzaCrust";
import PizzaToppings from "./PizzaToppings";
import Name from "./Name";
import Note from "./Note";
import data from "../../utils/data";

const OrderForm = () => {
  const { basePrices, calculatePrice } = data;
  const [totalPrice, setTotalPrice] = useState(basePrices.small);
  const [count, setCount] = useState(1);

  const formik = useFormik({
    initialValues: {
      size: "small",
      crust: "",
      toppings: [],
      name: "",
      note: "",
    },
    onSubmit: (values) => {
      const valuesWithPrice = {
        ...values, totalPrice: totalPrice
      }
      alert(JSON.stringify(valuesWithPrice,null,2))
    },
  });
  useEffect(() => {
    setTotalPrice(
      calculatePrice(
        formik.values.size,
        formik.values.toppings,
        basePrices,
        count
      )
    );
  },[formik.values]);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <PizzaSize
          selectedSize={formik.values.size}
          onSizeChange={formik.handleChange}
        />
        <PizzaCrust
          selectedCrust={formik.values.crust}
          onCrustChange={formik.handleChange}
        />
        <PizzaToppings
          toppings={formik.values.toppings}
          onToppingsChange={formik.handleChange}
        />
        <Note note={formik.values.note} onNoteChange={formik.handleChange} />
        <Name name={formik.values.name} onNameChange={formik.handleChange} />
        <h2>{`Total Price:${totalPrice}`}</h2>
        <button className=" ml-4 p-4 bg-slate-500" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
