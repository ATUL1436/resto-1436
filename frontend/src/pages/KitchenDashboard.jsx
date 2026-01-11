import { useEffect, useState } from "react";
import { getMenuApi } from "../services/api";
import MenuCard from "../components/MenuCard";
import Cart from "../components/Cart";
import "../styles/global.css";

function KitchenDashboard() {
    const [menu, setMenu] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        getMenuApi().then(setMenu)
    }, []);

    const addToCart = (item) => {
    setCart([...cart, item]);
    };

    return (
    <>
      <div className="menu-container">
        {menu.map(item => (
          <MenuCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} />
    </>
    );  
}

export default KitchenDashboard;