import React from 'react'

const Name = ({name,onNameChange}) => {
  return (
    <div className='p-4'>
      <h3 className='font-bold'>İsim</h3>
      <input className='w-[55%] h-10 border border-gray-950 border-2' type="text"
      name='name'
      value={name}
      onChange={onNameChange}
      placeholder='İsminizi girin'
      />
    </div>
  )
}

export default Name
