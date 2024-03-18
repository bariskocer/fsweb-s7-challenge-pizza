import React,{useState} from 'react'

const Counter = ({quantity, setQuantity}) => {
    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const decrement = () => {
      
       setQuantity(prevQuantity => prevQuantity - 1)
    }
  return (
    <div className='p-4'>
      {quantity !== 0 && <button type='button' className='text-4xl' onClick={decrement}>-</button>}
      <span className=' px-2 text-3xl'>{quantity}</span>
      <button type='button' className='text-3xl' onClick={increment}>+</button>
    </div>
  )
}

export default Counter
