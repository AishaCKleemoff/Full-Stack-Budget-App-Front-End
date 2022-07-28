import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
// ^^ this is our new package for making API calls
const API = process.env.REACT_APP_API_URL;
// request for data must come AFTER component is loaded to the DOM
// otherwise we have a RACE condition  - page might be done before data arrives;
function Transactions() {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    axios.get(`${API}/transactions`)
      .then((response) => { setTransactions(response.data) })
      .catch((error) => { console.error(error) })
  },[])
  
  

  return (
    <div className="Transactions">
      <section>
        <table>
          <thead className="transactions-thead">
            <tr>
              <th>Date</th>
              <th>Transaction</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
                return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;