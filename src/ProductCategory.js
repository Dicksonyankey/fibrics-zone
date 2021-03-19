import React, { useState } from 'react'
import './ProductCategory.css'
import items from './data'
import CategoryList from './CategoryList';
import CategoryMenu from './CategoryMenu';

const allCategories = ['All', ...new Set(items.map((item)=>item.category))];

function ProductCategory() {
    const [menuItems, setMeunItems] = useState(items);
    const [categories, setCategories] = useState(allCategories) 


    const filterItems = (category) =>{
        if(category === 'All'){
            setMeunItems(items);
            return;
        }

        const newItems = items.filter((item)=> item.category === category);
        setMeunItems(newItems);
    } 



    return (
        <div  className='productcategory'>
            <div className="productcategory__title">
                <h1 className='title'>Newly Released Product</h1>
                <div className="underline-title"></div>
            </div>

            <CategoryList categories={categories} filterItems={filterItems}/>
            <CategoryMenu  items={menuItems}/>
        </div>
    )
}

export default ProductCategory
