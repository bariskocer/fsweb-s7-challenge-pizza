import React from 'react'
const PizzaToppings = ({toppings,onToppingsChange}) => {
    const toppingsOptions = [
        "Pepperoni",
        "Domates",
        "Sosis",
        "Mısır",
        "Mantar",
        "Kanada Jambonu",
        "Sucuk",
        "Tavuk İzgara",
        "Jalapeno",
        "Ananas",
        "Kabak",
        "Soğan",
        "Sarımsak",
      ]
  return (
    <div className='p-4'>
        <h3 className='font-bold'>Ek Malzemeler</h3>
        <p>En fazla 10 malzeme şeçebilirsiniz. 5₺</p>
        {
            toppingsOptions.map((topping,index)=>(
                <div key={index}>
                    <input type="checkbox"
                    id={`topping-${index}`}
                    name='toppings'
                    value={topping}
                    checked={toppings.includes(topping)}
                    onChange={onToppingsChange}
                    />
                    <label htmlFor={`topping-${index}`}>{topping}</label>
                </div>
            ))
        }
    </div>
  )
}

export default PizzaToppings
