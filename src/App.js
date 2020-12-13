import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const productItems = [
    {name: "PhotoShope", price: "$50.00"},
    {name: "Illastrator", price: "$35.00"},
    {name: "PDF viwer", price: "$15.00"}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Person name="Israfil" country="Bangladesh"></Person>
        <Counter></Counter>
        <Users></Users>
        {
          productItems.map(product => <Products product={product}></Products>)
        }
      </header>
    </div>
  );

  function Users() {
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    return (
      <div>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }

  function Person(props) {
    return (
      <div style={{border: "2px solid orange", padding: "10px", margin: "20px"}}>
        <h1>Hello World</h1>
        <h2>{props.name}</h2>
      </div>
    )
  }

  function Counter() {
    const [count, setCount] = useState(0);
    return(
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(count+1)}>Increase</button>
      </div>
    )
  }


  function Products(props) {

    const {name, price} = props.product;

    const productStyle = {
      backgroundColor: "lightGray",
      borderRadius: "5px",
      padding: "20px",
      margin: "5px",
      width: "250px",
      float: "left",
      color: "orange",
      boxShadow: "2px 2px 7px gray"
    }
    return (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy now</button>
      </div>
    )
  }
}

export default App;
