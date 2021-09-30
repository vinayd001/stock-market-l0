import "./styles.css";

import React, { useState } from "react";
import ReturnPnL from "./ReturnPnL";

export default function App() {
  const [bill, setBill] = useState(null);
  const [cash, setCash] = useState(null);
  const [showCashContainer, setCashContainer] = useState(null);
  const [error, setError] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);
  // const [moneyLeft, setMoneyLeft] = useState(0);

  const notes = [2000, 500, 100, 20, 10, 5, 1];

  const billChange = (e) => {
    const newBill = e.target.value;
    if (newBill > 0) {
      setBill(newBill);
    } else {
      setBill(null);
    }
    setError(0);
  };

  const cashChange = (e) => {
    const newCash = e.target.value;
    if (newCash > 0) {
      setCash(newCash);
    } else {
      setCash(null);
    }
    setError(0);
  };

  const currentPriceChange = (e) => {
    const newPrice = e.target.value;
    if (newPrice > 0) {
      setCurrentPrice(newPrice);
    } else {
      setCurrentPrice(null);
    }
    setError(0);
  };

  const nextClick = () => {
    if (bill > 0) setCashContainer(1);
    if (showCashContainer > 0 && cash > 0) setCashContainer(2);
  };

  const handleSubmit = () => {
    let error = cash > 0 && bill > 0 && currentPrice > 0 ? 2 : 1;
    setError(error);
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>Stock Market</h1>
        <p>Check you Profit / Loss</p>
      </div>
      <div className="bill-container">
        <div className="bill-amount">Initial Price</div>
        <div className="input-div">
          <input
            onChange={billChange}
            type="text"
            placeholder="Enter the initial stock price"
          />
        </div>
        {!showCashContainer ? (
          <button onClick={nextClick} type="submit" value="next">
            Next
          </button>
        ) : null}
      </div>
      {showCashContainer > 0 ? (
        <div className="cash-container">
          <div className="cash-given">Quantity of Stocks</div>
          <div className="input-div">
            <input
              onChange={cashChange}
              type="text"
              placeholder="Enter the number of stocks bought"
            />
          </div>
          {showCashContainer < 2 ? (
            <button onClick={nextClick} type="submit" value="next">
              Next
            </button>
          ) : null}
        </div>
      ) : null}
      {showCashContainer > 1 ? (
        <div className="cash-container">
          <div className="cash-given">Current Price</div>
          <div className="input-div">
            <input
              onChange={currentPriceChange}
              type="text"
              placeholder="Enter the current stock price"
            />
          </div>
          <button onClick={handleSubmit} type="submit" value="submit">
            Tell Me!
          </button>
        </div>
      ) : null}
      <ul>
        {error === 1 ? (
          "Please check inputs"
        ) : (
          <ReturnPnL
            show={error === 2}
            initialPrice={bill}
            numberOfStocks={cash}
            currentPrice={currentPrice}
          />
        )}
      </ul>
    </div>
  );
}
