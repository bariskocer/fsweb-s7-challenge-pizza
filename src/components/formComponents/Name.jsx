import React from 'react'

const Name = ({name,onNameChange}) => {
  return (
    <div className='w-[650px] mx-auto '>
      <h3 className='font-bold mt-4'>İsim</h3>
      <input className='w-full h-10 border border-gray-950 border-2' type="text"
      name='name'
      value={name}
      onChange={onNameChange}
      placeholder='İsminizi girin'
      />
    </div>
  )
}

export default Name
