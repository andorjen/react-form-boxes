import React, { useState } from "react";

/** Form for creating a new box to add to page
 *
 * state:  {height, width, backgroundColor},  handled on submission,
 * sends data to addBox function from BoxList
 * 
 * props: addBox function
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {
    const initialState = {
        height: "",
        width: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(initialState);

    function handleSubmit(evt) {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(previousData => ({
            ...previousData,
            [name]: value,
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height:</label>
            <input
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                />

            <label htmlFor="width">Width:</label>
            <input
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
                />

            <label htmlFor="backgroundColor">Background Color:</label>
            <input
                type="color"
                id="backgroundColor"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
                />

            <button>Add a new box!</button>
        </form>
    );
}

export default NewBoxForm;