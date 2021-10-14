import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';



/** BoxList, manages boxes display on the page
 *
 * State:
 * - boxes: array like [ { id, height, width, backgroundColor, deleteBox }, ... ]
 *
 * Props:
 * none
 * 
 * Boxlist -> NewBoxForm ; Boxlist -> Box.
 */
function BoxList() {

    const [boxes, setBoxes] = useState([]);

    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxes(prevBoxes => [...prevBoxes, newBox])
    }

    function deleteBox(id) {
        setBoxes(prevBoxes => prevBoxes.filter(box => box.id !== id))
    }

    function renderBoxes() {

        return (
            <div>
                {boxes.map(box => {
                    return <Box key={box.id}
                        id={box.id}
                        height={box.height}
                        width={box.width}
                        backgroundColor={box.backgroundColor}
                        deleteBox={deleteBox} />
                })}
            </div>
        )
    }


    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    )
}


export default BoxList;