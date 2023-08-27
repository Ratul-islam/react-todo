import React,{useState} from 'react';


import Content from '../components/Content';
import AddTodo from '../components/AddTodo';



const Index = () => {
    const [status, setStatus] = useState(false);
    const [array, setArray] = useState([]);


    const enable =()=>{
        setStatus(!status)
    }

    const handleData=(props)=>{
      setArray((prev)=>{
        return [...prev ,{props}]
      })
      enable()
    }
  return (
    <div>
        {status && <AddTodo state={enable} handler={handleData} />}
        <Content status={status} state={enable} datas={array} />
    </div>
  )
}

export default Index;