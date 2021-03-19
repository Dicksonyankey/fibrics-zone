import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckouProduct";


function Checkout({ id, image, title, price, rating }) {
    const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.roseuniacke.com/media/wysiwyg/home-page/homepage-banner-fabric.jpg"
          alt=""
        />

        <div>
          <h3>Hello Guest</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
