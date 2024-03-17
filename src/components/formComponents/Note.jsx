import React from 'react'

const Note = ({note,onNoteChange}) => {
  return (
    <div className='p-4'>
      <h2 className='font-bold'>Sipariş Notu</h2>
      <input className='w-[55%] h-10 border-2 border-gray-950' type="text"
      name='note'
      value={note}
      onChange={onNoteChange}
      placeholder='Siparişine eklemek istediğin bir not var mı?'
      />
    </div>
  )
}

export default Note
