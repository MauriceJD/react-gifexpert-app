import React, { useState } from 'react';
import PropTypes from 'prop-types'


const AddCategory = ({setcategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setcategories(categories => [...categories, inputValue])
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )

}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}

export default AddCategory;