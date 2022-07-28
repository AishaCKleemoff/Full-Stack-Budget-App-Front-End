import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <tr>
      <td>
        {transaction.amount ? (
          <span>💰</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        {/* <a href={}target="_blank" rel="noreferrer"> */}
        {transaction.item_name}
        {/* </a> */}
      </td>
      <td>
        <Link to={`/transactions/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Transaction;
