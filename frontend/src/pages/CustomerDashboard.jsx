import {useState, useEffect } from "react";
import {getMenuApi} from '../services/api';
import placeOrderApi from '../services/orderApi';
import '../styles/CustomerDashboard.css';
// import '../styles/global.css';

export default function CustomerDashboard() {
  const [menu , setMenu] = useState([]);
  const [selectedTable , setSelectedTable] = useState(null);
  const [cart , setCart] = useState({});

  useEffect(() => {
    loadMenu();
  },[]);

  const loadMenu = async () => {
    const data =await getMenuApi();
    setMenu(data);
  };
  const tables = Array.from({length:10},(_,i) => i + 1);
  const increaseQty = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: {
        ...item,
        qty: (prev[item.id]?.qty || 0) + 1,
      },
    }));
  };
  const decreaseQty = (item) => {
    if (!cart[item.id]) return;

    if (cart[item.id].qty === 1) {
      const newCart = { ...cart };
      delete newCart[item.id];
      setCart(newCart);
    } else {
      setCart((prev) => ({
        ...prev,
        [item.id]: {
          ...item,
          qty: prev[item.id].qty - 1,
        },
      }));
    }
  };
  const placeOrder = async () => {
    if (!selectedTable) {
      alert("Please select table");
      return;
    }
  const orderItems = Object.values(cart).map((item) => ({
      menu_id: item.id,
      qty: item.qty,
    }));
  const payload = {
      table_no: selectedTable,
      items: orderItems,
    };
  await placeOrderApi(payload);
  alert("Order sent to kitchen");
  setCart({});
};

return (
    <div className="customer-container">
      {/* LEFT BOX */}
      <div className="box">
        <h3>Select Table</h3>
        <div className="table-grid">
          {tables.map((t) => (
            <button
              key={t}
              className={selectedTable === t ? "active" : ""}
              onClick={() => setSelectedTable(t)}
            >
              Table {t}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT BOX */}
      <div className="box">
        <h3>Menu</h3>

        {menu.map((item) => (
          <div key={item.id} className="menu-row">
            <span>{item.name} – ₹{item.price}</span>

            <div className="qty-controls">
              <button onClick={() => decreaseQty(item)}>-</button>
              <span>{cart[item.id]?.qty || 0}</span>
              <button onClick={() => increaseQty(item)}>+</button>
            </div>
          </div>
        ))}

        <button className="order-btn" onClick={placeOrder}>
          Place Order (Kitchen)
        </button>
      </div>
    </div>
  );
}





// import { useEffect, useState } from "react";
// import { getMenuApi } from "../services/api";
// import MenuCard from "../components/MenuCard";
// import Cart from "../components/Cart";
// import "../styles/global.css";

// function CustomerDashboard() {
//     const [menu, setMenu] = useState([]);
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         getMenuApi().then(setMenu)
//     }, []);

//     const addToCart = (item) => {
//     setCart([...cart, item]);
//     };

//     return (
//     <>
//       <div className="menu-container">
//         {menu.map(item => (
//           <MenuCard key={item.id} item={item} addToCart={addToCart} />
//         ))}
//       </div>
//       <Cart cart={cart} />
//     </>
//     );  
// }

// export default CustomerDashboard;