import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <tr>
      <td>
        <span>💲</span>
        {transaction.amount}
      </td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
      </td>
      <td>📅 {transaction.date}</td>
    </tr>
  );
}

export default Transaction;
