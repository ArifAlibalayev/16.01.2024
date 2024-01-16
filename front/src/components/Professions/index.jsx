import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { wishlistContext } from "../../context/WishlistProvider";
import { BasketContext } from "../../context/BasketProvider";

function ProfessionsSection() {
  const [apiData, setApiData] = useState([]);
  const [search, setsearch] = useState('')
  const [choosenCategory, setChoosenCategory] = useState(null)

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    setApiData(data);
  }

  const {wishlist, addToWishlist} = useContext(wishlistContext)
  const {basket, deleteFromBasket, addToBasket} = useContext(BasketContext)



  return (
    <section id="professionsSection">
      <div className="professionsTitle">
        <h1>Features That Make Us Hero</h1>
        <p>
          If you are looking at blank cassettes on the web, you may be very
          confused at the difference in price. You may see some for as low as
          $.17 each.
        </p>
      </div>
      <div className="sortSearchButtons">
        <input type="text" placeholder="search..." value={search} onChange={(e)=>setsearch(e.target.value)} />
        <button onClick={()=>setChoosenCategory({property:"name",asc:true})}>A-z</button>
        <button onClick={()=>setChoosenCategory({property:"name",asc:false})}>Z-a</button>

      </div>
      <div className="professionsWrapper">
        {apiData
        .filter((x)=>
        x.name.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a,b)=>{
          if (choosenCategory && choosenCategory.asc===true) {
            return (a[choosenCategory.property] > b[choosenCategory.property] ? 1 : a[choosenCategory.property] < b[choosenCategory.property] ? -1 : 0)
          }
          else if (choosenCategory && choosenCategory.asc===false) {
            return (a[choosenCategory.property] < b[choosenCategory.property] ? 1 : a[choosenCategory.property] > b[choosenCategory.property] ? -1 : 0)
          } else {
            return (null)
          }
        })
        
        .map((x) => (
          <div className="professionCard" key={x._id}>
            <i className={x.icon}></i>
            <h3>{x.name}</h3>
            <p>{x.desc}</p>
            <button onClick={()=>addToWishlist(x)}><i className={ wishlist.some((item)=>x._id === item._id)? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></button>
            <button onClick={()=>addToBasket(x)}>Add to Basket</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfessionsSection;
