import React from 'react'

const AddBtnTodo = ({state}) => {
    
  return (
    <div className='todo add' onClick={state}>
      add new
    </div>
  )
}

export default AddBtnTodo