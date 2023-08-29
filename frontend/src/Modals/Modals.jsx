import React, { useReducer } from 'react'


const initialState = {
    title: "",
    description: "Default Description",
    task_status: "todo",
    tags: ["Others"],
    subTasks: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "title":
        return {
          ...state,
          title: action.payload,
        };
  
      case "description":
        return {
          ...state,
          description: action.payload,
        };
      case "task_status":
        return {
          ...state,
          task_status: action.payload,
        };
      case "tags":
        return {
          ...state,
          tags: action.payload,
        };
      default:
        return state;
    }
  };
  

const Modals = () => {
  const [state, setState] = useReducer(reducer, initialState);
  return (
    <div className='mt-[1rem]'>
        <p className='text-[1.2rem] font-[600] mt-[1rem]'>Title</p>
          <input type="text" className=' h-[2rem] border-4' value={state.title} placeholder='Title' 
          onChange={(e)=>setState({type: "title", payload: e.target.value })}/>

  <p className='text-[1.2rem] font-[600] mt-[1rem]'>Description</p>
          <input type="text" className=' h-[2rem] border-4'  value={state.description} placeholder='Description'
          onChange={(e)=>setState({ type: "description", payload: e.target.value })} />
          <br />
          
          <p className='text-[1.2rem] font-[600] mt-[1rem]'>Progress</p>
          <select placeholder="Select status"
          className=' h-[2rem] border-4'
              value={state.task_status}
              onChange={(e) =>
                setState({ type: "task_status", payload: e.target.value })
              }>
                 <option value="todo">Todo</option>
              <option value="in-progress">In-Progress</option>
              <option value="done">Done</option>
          </select>
          
         
    </div>
  )
}

export default Modals
