import React from "react";
import CategoryProduct from "./CategoryProduct";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__banner"
          src="https://images.pexels.com/photos/6358791/pexels-photo-6358791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Home Banner"
        />

        <div className="home__row">
          <Product
            id="1"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={150}
            rating={5}
            image="https://images.pexels.com/photos/5704187/pexels-photo-5704187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Product
            id="2"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={200}
            rating={3}
            image="https://images.pexels.com/photos/1030946/pexels-photo-1030946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Product
            id="3"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={98}
            rating={4}
            image="https://images.pexels.com/photos/3731097/pexels-photo-3731097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Product
            id="4"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={240}
            rating={2}
            image="https://images.pexels.com/photos/1487703/pexels-photo-1487703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
        <div className="home__row-1">
          <Product
            id="5"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={135}
            rating={3}
            image="https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Product
            id="6"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={124}
            rating={3}
            image="https://images.pexels.com/photos/4630838/pexels-photo-4630838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Product
            id="7"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={390}
            rating={2}
            image="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
        <div className="home__row-2">
          <Product
            id="8"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={110}
            rating={4}
            image="https://images.pexels.com/photos/3038601/pexels-photo-3038601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Product
            id="9"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={127}
            rating={4}
            image="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Product
            id="10"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={210}
            rating={5}
            image="https://images.pexels.com/photos/5704188/pexels-photo-5704188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Product
            id="11"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={95}
            rating={2}
            image="https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
        <div className="home__row-3">
          <Product
            id="12"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={100}
            rating={3}
            image="https://images.pexels.com/photos/5704187/pexels-photo-5704187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Product
            id="13"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={80}
            rating={4}
            image="https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Product
            id="13"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={78}
            rating={4}
            image="https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Product
            id="13"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={69}
            rating={4}
            image="https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Product
            id="13"
            title="Cotton Fabric : Made from a highly scaled market cotton. 100 percent cotton(100%)"
            price={72}
            rating={4}
            image="https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>

        <div className="home__category">
          <h1>Available Stock</h1>
          <div className="underline"></div>
        </div>

        <div className="home__cateoryProduct">
          <div className="home__row">
            <CategoryProduct
              image="https://gumlet.assettype.com/freepressjournal%2F2020-06%2Fa04208c8-198b-48d4-bdf9-72a2ec2f2985%2F1580991928_fabrics_banner.png?w=1200"
              title="All round fabric"
              items="120 items available"
              rating={5}
            />
            <CategoryProduct
              image="https://thumbs.dreamstime.com/b/image-various-furniture-fabrics-image-various-furniture-fabrics-furniture-manufacturing-upholstery-fabrics-furniture-banner-186463995.jpg
              "
              title="Men's fabric"
              items="223 items available"
              rating={5}
            />
            <CategoryProduct
              image="https://ehersh.files.wordpress.com/2011/03/img_65421.jpg"
              title="Kid's fabric"
              items="431 items available"
              rating={5}
            />
            <CategoryProduct
              image="https://images.jdmagicbox.com/comp/delhi/l9/011pxx11.xx11.140510130139.b6l9/catalogue/siyaram-impex-sadar-bazar-delhi-non-woven-fabric-manufacturers-2yhp4pr.jpg?clr="
              title="Women's fabric"
              items="511 items available"
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
