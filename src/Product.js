import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'



function Product({id,price,image,title,rating}) {
    const [{basket}, dispatch] = useStateValue();



    const addToBasket = () => {
        dispatch({
            type : "ADD_TO_BASKET",
            item : {
                id : id,
                title : title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    }
    return (
        <div className='product'>
            <div className="poduct__info">
                <p className='product__title'>{title}</p>
                <p className='product__price'>
                    <small> <strong>GH₵</strong> </small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} alt="poduct-image"/>

            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
