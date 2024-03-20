import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import PizzaSize from "./PizzaSize";
import PizzaCrust from "./PizzaCrust";
import PizzaToppings from "./PizzaToppings";
import Name from "./Name";
import Note from "./Note";
import data from "../../utils/data";
import Summary from "./Summary";
import Header from "../shared/Header";
import Info from "./Info";

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
    onSubmit: (values, { setSubmitting }) => {
      // Form verilerini ve toplam fiyatı içeren nesneyi oluştur
      const orderDetails = {
        ...values,
        count, // Sipariş adedi
        totalPrice, // Toplam fiyat
      };

      // API adresi
      const apiUrl = 'https://reqres.in/api/pizza';

      // Axios ile POST isteği gönder
      axios.post(apiUrl, orderDetails)
        .then(response => {
          console.log('Sipariş başarıyla gönderildi:', response.data);
          // İsteğin başarılı olduğuna dair bir mesaj gösterebilirsiniz.
        })
        .catch(error => {
          console.error('Sipariş gönderimi sırasında bir hata oluştu:', error);
          // İsteğin başarısız olduğuna dair bir mesaj gösterebilirsiniz.
        })
        .finally(() => {
          setSubmitting(false); // Gönderim durumunu güncelle
        });
    },
  });
  useEffect(() => {
    setTotalPrice(calculatePrice(formik.values, basePrices, count));
  }, [formik.values, count]);
  return (
    <div>
      <Header/>
      <Info />
      <form onSubmit={formik.handleSubmit}>
        <div className="flex w-[650px] justify-between mx-auto">
        <PizzaSize
          selectedSize={formik.values.size}
          onSizeChange={formik.handleChange}
        />
       <div className="mr-20">
       <PizzaCrust
          selectedCrust={formik.values.crust}
          onCrustChange={formik.handleChange}
        />
       </div>
        </div>
        <PizzaToppings
          toppings={formik.values.toppings}
          onToppingsChange={formik.handleChange}
        />
        <Note note={formik.values.note} onNoteChange={formik.handleChange} />
        <Name name={formik.values.name} onNameChange={formik.handleChange} />
        <Summary
          toppings={formik.values.toppings}
          totalPrice={totalPrice}
          count={count}
          setCount={setCount}
        />
      </form>
    </div>
  );
};

export default OrderForm;
