import React from 'react'


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
  return (
    <div>
        <Modal >

        </Modal>
      
    </div>
  )
}

export default Modals
