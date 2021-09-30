import "./styles.css";

import React from "react";

export default function ReturnPnL({
  show,
  initialPrice,
  numberOfStocks,
  currentPrice
}) {
  return (
    show && (
      <div className="return-change-container">
        {currentPrice === initialPrice ? (
          <div id="null-output">No pain No gain, and no gain no pain :)</div>
        ) : (
          [
            currentPrice > initialPrice ? (
              <div id="profit-output">
                Yay!! Your Profit is{" "}
                {(currentPrice - initialPrice) * numberOfStocks} and profit
                Percentage is{" "}
                {((currentPrice - initialPrice) * 100) / initialPrice}%
              </div>
            ) : (
              <div id="loss-output">
                Whoops!! Your loss is{" "}
                {(initialPrice - currentPrice) * numberOfStocks} and loss
                Percentage is{" "}
                {((initialPrice - currentPrice) * 100) / initialPrice} :(
              </div>
            ),
            <div></div>
          ]
        )}
      </div>
    )
  );
}
