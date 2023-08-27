import React,{useState} from 'react'

const AddTodo = ({handler}) => {
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
                <input type="text" name='desc'  onChange={handleChange}/>
                <button type='submit'>ADD</button>
            </form>
        </div>
    </div>
  )
}

export default AddTodo