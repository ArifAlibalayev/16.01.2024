import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../context/BasketProvider";

function BasketElements() {
  const {
    basket,
    deleteFromBasket,
    addToBasket,
    decreaseCount,
    increaseCount,
  } = useContext(BasketContext);

  return (
    <section id="wishlistElement">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Operations</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((x) => (
            <tr key={x._id}>
              <td>{x.name}</td>
              <td>{x.desc}</td>
              <td ><button onClick={() => deleteFromBasket(x)}>X</button></td>
              <td style={{display:"flex", gap:"20px"}}><button onClick={()=>decreaseCount(x)}>-</button>
              <h3>{x.count}</h3>
              <button onClick={()=>increaseCount(x)}>+</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default BasketElements;
