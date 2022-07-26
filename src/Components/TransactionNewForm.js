import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });
  const navigate = useNavigate();

  const addTransaction = () => {
    axios
      .post(`${API}/transactions`, transaction)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.error(error));
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setTransaction({ ...transaction, from: !transaction.from });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit} className="new-form">
        <label htmlFor="name"> Transaction Name:</label>
        <input
          name="name"
          id="name"
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Transaction"
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="text"
          required
          placeholder="$$$"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          placeholder="debit or credit "
          onChange={handleTextChange}
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          name="from"
          type="text"
          placeholder="source of transaction "
          onChange={handleCheckboxChange}
          checked={transaction.from}
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          name="date"
          onChange={handleTextChange}
          placeholder="Date of transaction."
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default TransactionNewForm;
