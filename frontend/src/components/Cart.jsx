function Cart({ cart }) {
  const total = cart.reduce((s, i) => s + Number(i.price), 0);

  return (
    <div className="card">
      <h3>Bill</h3>
      {cart.map((i, idx) => (
        <p key={idx}>{i.name} - ₹{i.price}</p>
      ))}
      <h4>Total: ₹{total}</h4>
    </div>
  );
}

export default Cart;
