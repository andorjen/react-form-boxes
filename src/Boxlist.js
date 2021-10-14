import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

function BoxList(){
    const [boxes, setBoxes] = useState([]);
    
    function renderBoxes(){
        return(
            <div>
                {boxes.map(box=>{
                   return <Box key={box.id} 
                                id={box.id} 
                                height={box.height} 
                                width={box.width} 
                                backgroundColor={box.backgroundColor} 
                                deleteBox={deleteBox}/>
                })}
            </div>
        )
    }

    function addBox(box){
        
    }



}


/* <Box key={box.id} {...box}/> */

export default BoxList;