import React from "react";


import Home from "./components/Home";
import Produtos from "./components/Produtos";

const App = () => {
  const { pathname } = window.location;
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
      {pathname === "/" ? <Home /> : <Produtos />}
    </div>
  );
};

export default App;
