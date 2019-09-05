import React, { useState, useEffect } from "react";
import "./App.css";

interface IProduct {
  id: string;
  size: number;
  price: number;
  face: string;
  date: string;
}

function App() {
  const result = useFetch();

  return (
    <div className="App">
      <select>
        <option value="dog">Size</option>
        <option value="cat">Price</option>
        <option value="hamster">ID</option>
      </select>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {result.map(value => (
          <div
            key={value.id}
            style={{
              border: "1px solid black",
              height: "120px",
              display: "flex",
              flexDirection: "column",
              flex: "0 0 33%"
            }}
          >
            <div
              style={{
                fontSize: value.size
              }}
            >
              Face: {value.face}
            </div>

            <div>Price: {value.price}</div>
            <div>Date Added: {value.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
function useFetch(): IProduct[] {
  const [data, updateData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products").then(res =>
      res.json().then(data => updateData(data))
    );
  }, []);

  return data;
}

export default App;
