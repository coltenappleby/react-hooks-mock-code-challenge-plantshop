import React, {useState} from "react";

function PlantCard({image = "https://via.placeholder.com/400", name, id, price}) {

  let [inStock, setStock] = useState(true)

  function handleClick() {
    setStock(false)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {inStock ? (
        <button onClick = {handleClick} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
