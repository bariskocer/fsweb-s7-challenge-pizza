import React from 'react'
const PizzaToppings = ({toppings,onToppingsChange}) => {
    const toppingsOptions = [
        "Pepperoni",
        "Domates",
        "Sosis",
        "Mısır",
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
    <div className='w-[650px] mx-auto'>
        <div className='mb-2 flex flex-col gap-3'>
        <h3 className='font-bold'>Ek Malzemeler</h3>
        <p>En fazla 10 malzeme şeçebilirsiniz. 5₺</p>
        </div>
        <div className='grid grid-cols-3  gap-y-2'>
        {
            toppingsOptions.map((topping,index)=>(
                <div className='p-2 w-29' key={index}>
                    <input  type="checkbox"
                    id={`topping-${index}`}
                    name='toppings'
                    value={topping}
                    checked={toppings.includes(topping)}
                    onChange={onToppingsChange}
                    />
                    <label className='m-3' htmlFor={`topping-${index}`}>{topping}</label>
                </div>
            ))
        }
        </div>
        
    </div>
  )
}

export default PizzaToppings
