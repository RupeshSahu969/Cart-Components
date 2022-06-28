import React ,{useState,useEffect}from 'react'

const Todo = () => {

const [data,setData] =useState([]);

const getTodos=async () => {
    
    try{
        let data = await fetch
        (
            `https://jsonplaceholder.typicode.com/todos`
        )
        data=await data.json();
        console.log(data)
        setData(data)
    }catch(err){
        console.log(err)
    }
}

useEffect(() => {
    alert("making request")
    getTodos()


}, [])





  return (

    <div>
      <h1>Todos</h1>  
        <button onClick={getTodos} >FETCH</button>
        <div>
            {
                data.map(todo=>
                    <div style={{display:"flex",gap:"20px"}}>
                        
                        </div>
                        )
            }
        </div>
        </div>
  )
}

export default Todo