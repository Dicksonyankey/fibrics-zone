import React from 'react'
import './CategoryList.css'

function CategoryList({categories, filterItems}) {
    return (
        <div className='categorylist'>
            {categories.map((category, index)=>{
                return(
                    <button type='button' className='category__button' key={index} onClick={()=> filterItems(category)}>{category}</button>
                )
            })}
            
        </div>
    )
}

export default CategoryList;
