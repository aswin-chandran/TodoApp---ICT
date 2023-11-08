import React, { useState } from "react";
import "../ui-components/form.css";


const Todofroms = () => {
  const [value, setValue] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);


    
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="Todo-form">
        <input
          type="text"
          value={value}
          className="Todo-text"
          placeholder="Input task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="Todo-button">
          {" "}
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Todofroms;
