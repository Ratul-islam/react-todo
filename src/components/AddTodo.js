import React,{useState} from 'react'

const AddTodo = ({state ,handler}) => {
    const [data, setData] = useState({})

 
    const handleChange = (e) => {
        var name = e.target.name;
        setData((oldData) => {
            return {...oldData, [name]: e.target.value}
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        handler(data)
    }

    
    
    
    return (
        <div>
        <div className='AddTodo'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title'  onChange={handleChange}/>
                <textarea type="text" name='desc'  onChange={handleChange}/>
                <button type='submit' >ADD</button>
                <button type='submit' onClick={state}>CANCEL</button>
            </form>
        </div>
    </div>
  )
}

export default AddTodo