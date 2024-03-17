import React from 'react'

const PizzaSize = ({selectedSize, onSizeChange}) => {
  return (
    <div className='p-4'>
      <h3 className='text-[20px] font-bold py-2'>Boyut Seç</h3>
      <div className='flex justify-start gap-4'>
        <input type="radio"
        id='radio-small'
        name='size'
        value='small'
        checked={selectedSize === 'small'}
        onChange={onSizeChange}
        />
        <label htmlFor="radio-small">Küçük</label>
      </div>
      <div className='flex justify-start gap-4'>
        <input type="radio"
        id='radio-medium'
        name='size'
        value='medium'
        checked={selectedSize === 'medium'}
        onChange={onSizeChange}
        />
        <label htmlFor="radio-medium">Orta</label>
      </div>
      <div className='flex justify-start gap-4'>
        <input type="radio"
        id='radio-large'
        name='size'
        value='large'
        checked={selectedSize === 'large'}
        onChange={onSizeChange}
        />
        <label htmlFor="radio-large">Büyük</label>
      </div>
    </div>
  )
}

export default PizzaSize
