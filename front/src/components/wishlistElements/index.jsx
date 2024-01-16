import React, { useContext, useEffect, useState } from 'react'
import { wishlistContext } from '../../context/WishlistProvider'

function WishlistElement() {
  const {wishlist, addToWishlist} = useContext(wishlistContext)



  return (
    <section id='wishlistElement'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((x) => (
            <tr key={x._id}>
              <td>{x.name}</td>
              <td>{x.desc}</td>
              <button onClick={()=>addToWishlist(x)}>X</button>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default WishlistElement