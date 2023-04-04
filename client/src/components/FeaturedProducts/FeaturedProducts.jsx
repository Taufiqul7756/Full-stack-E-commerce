import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/10508388/pexels-photo-10508388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "T-Shirt",
      oldPrice: 13,
      isNew: true,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/15776120/pexels-photo-15776120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve T-shirt",
      oldPrice: 13,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/5685315/pexels-photo-5685315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: true,
      oldPrice: 13,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/11992098/pexels-photo-11992098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Panjabi",
      oldPrice: 13,
      isNew: false,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type} Products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
          incidunt placeat voluptatem quo dolor, animi minima repellendus
          ducimus quibusdam soluta?
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} kew={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
