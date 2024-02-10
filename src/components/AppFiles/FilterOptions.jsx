import React from 'react';
import "./../../stylesheets/Filter.css"

const FilterOptions = ({ selectedOption, onSelect }) => {
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        onSelect(selectedValue);
    };

    return (
        <div>
            <label className='filter_label' htmlFor="filterOptions">Filter:</label>
            <select className='filter_options' value={selectedOption} onChange={handleOptionChange}>
                <option className='filter_op' value="All Fights">All Fights</option>
                <option className='filter_op' value="Last 3 Years">Last 3 Years</option>
            </select>
        </div>
    );
};

export default FilterOptions;
