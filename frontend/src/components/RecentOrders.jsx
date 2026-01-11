export default function RecentOrders() {
  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Table</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>101</td>
          <td>T3</td>
          <td>₹450</td>
          <td>Preparing</td>
        </tr>
        <tr>
          <td>102</td>
          <td>T5</td>
          <td>₹620</td>
          <td>Served</td>
        </tr>
      </tbody>
    </table>
  );
}
