import React from "react";
import Todofroms from "./Todofroms";
import Todolist from "./Todolist";

const Todo = ({ task }) => {
  return (
    <div className="Todo">

      <Todofroms/>
      <Todolist/>
   

      
    </div>
  );
};

export default Todo;
