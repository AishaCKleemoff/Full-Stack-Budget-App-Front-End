import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    item_name: "",
    date: "",
    category: "",
    amount:0,
    from: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setTransaction({ ...transaction, from: !transaction.from });
  };
 
  useEffect(() => {
    axios.get(`${API}/transactions/${index}`)
      .then(response => setTransaction(response.data))
      .catch(error => console.error(error))
   
  }, [index]);

  const updateTransaction = () => {
    axios.put(`${API}/transactions/${index}`, transaction) 
    
      .then(response => {
        setTransaction(response.data)
       
        navigate(`/transactions/${index}`)
        
      })
      .catch(error => console.error(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder=""
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={transaction.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={transaction.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          onChange={handleTextChange}
          checked={transaction.from}
        />
        <label htmlFor="date">Date:</label>
        <textarea
          id="date"
          name="date"
          value={transaction.date}
          onChange={handleTextChange}
          placeholder="Please enter date"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TransactionEditForm;