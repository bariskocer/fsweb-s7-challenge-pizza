import React from 'react'
import Counter from './Counter'
import {Link} from 'react-router-dom'

const Summary = ({toppings,totalPrice,count,setCount}) => {
  return (
    <div className='max-w-[650px] mx-auto'>
        <Counter quantity={count} setQuantity={setCount}/>
      <div className='p-4 border- border-gray-950 border-2'>
      <p>{`Seçimler: ${toppings.length*5}`}</p>
      <p>{`Toplam: ${totalPrice}`}</p>
      </div>
      <button className='w-full bg-yellow-300 p-2 mb-3'><Link to="/success">SİPARİŞ VER</Link></button>
    </div>
  )
}

export default Summary
