import React from "react";
import "./CategoryMenu.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from "@material-ui/core/IconButton";
import ShopIcon from '@material-ui/icons/Shop';



function CategoryMenu({ items }) {
  return (
    <div className="categorymenu">
      {items.map((menuItems) => {
        const { id, image, description, price } = menuItems;
        return (
          <div key={id} className="category__item">
            <div className="discount__tag">
                <h1 className='tag'>30% Off</h1>
            </div>
            <img src={image} alt="" />
            <div className="categorymenu__details">
              <h5>
                <strong>
                GH₵  <i>{price}</i>
                </strong>
              </h5>
              <h3>
                <strong>{description}</strong>
              </h3>
            </div>
            <div className="category__buttons">
                <IconButton>
                    <FavoriteBorderIcon/>
                </IconButton>
                <IconButton >
                    <ShopIcon/>
                </IconButton>

            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryMenu;
