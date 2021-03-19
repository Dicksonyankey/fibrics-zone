import React from 'react'
import './CategoryProduct.css'


function CategoryProduct({image,title,items,rating}) {
    return (
        <div className='categoryproduct'>
            <img src={image} alt=""/>
            <div className="category__details">
            <h3><strong>{title}</strong></h3>
            <h5><strong><i>{items}</i></strong></h5>
            </div>
            <div className="categoryproduct__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>

        </div>
    )
}

export default CategoryProduct
