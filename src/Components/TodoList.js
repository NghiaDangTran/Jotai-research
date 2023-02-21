import React from "react";

import {  atom,useAtom} from "jotai";

const Mode = atom('All')

function TodoList(props) {
  const [crrMode, setMode] = useAtom(Mode)

  return (
    <div>
    
 
 <div style={{display:"flex", }}>

     
      <div  style={{paddingLeft:"30px"}}>
        <input
          type="radio"
        
          value="All"
          
          checked={"All"===crrMode}
          onChange={
        ()=>{setMode("All")}
      }
      
        />
        All
      </div>
      <div style={{paddingLeft:"30px"}} >
        <input
          type="radio"
          checked={"Completed"===crrMode}
          onChange={
        ()=>{setMode("Completed")}
      }
        
          value="Completed"
      
        />
        Completed
      </div>
      <div style={{paddingLeft:"30px"}} >
        <input
          type="radio"
       
          value="NotComplete"
          checked={"NotComplete"===crrMode}
          onChange={
        ()=>{setMode("NotComplete")
        
        }
      }
        />
        Not Complete
      </div>
    </div>
 </div> 

  );

}

export default TodoList;
