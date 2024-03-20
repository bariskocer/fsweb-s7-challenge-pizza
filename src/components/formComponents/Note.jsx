import React from 'react'

const Note = ({note,onNoteChange}) => {
  return (
    <div className='w-[650px] mx-auto'>
      <h2 className='font-bold mt-4'>Sipariş Notu</h2>
      <input className='w-full h-10 border-2 border-gray-950' type="text"
      name='note'
      value={note}
      onChange={onNoteChange}
      placeholder='Siparişine eklemek istediğin bir not var mı?'
      />
    </div>
  )
}

export default Note
