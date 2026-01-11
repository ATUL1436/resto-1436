function MenuCard({ item, addToCart }) {
  return (
    <div className="card">
      <h4>{item.name}</h4>
      <p>₹{item.price}</p>
      <button onClick={() => addToCart(item)}>Add</button>
    </div>
  );
}
export default MenuCard;
