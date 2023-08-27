import React from 'react'

const Todo = ({ title, desc}) => {

    const trucateTitle =(title)=>{
        if(title && title.length > 5){
          return title.slice(0, 5) + '...'
        }
        return title
    }
  return (
    <div className='todo'>
        <div>
            <h3 className="title">{trucateTitle(title)}</h3>
        </div>
        <p>{desc && desc}</p>
    </div>
  )
}

export default Todo