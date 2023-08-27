import React from 'react'
import Todo from './Todo'
import AddBtnTodo from '../subcomponenet/addBtnTodo'


const Content = ({status, state, datas}) => {
    console.log(status)
  return (
    <div className='contentSec'>
        {datas && datas.map(data => <Todo title={data.props.title} desc={data.props.desc} />)}
        {status? "": <AddBtnTodo state={state}/>}
    </div>
  )
}

export default Content