import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Giraffe from "../Giraffe/Giraffe.js";
import Lion from "../Lion/Lion.js";
import Zebra from "../Zebra/Zebra.js";


export default function App() {
  return (
    <div>
      <h1>Kruger Wildlife</h1>
      <BrowserRouter>
        <nav>
          <ol>
            <li><Link to="/giraffe">giraffe</Link></li>
            <li><Link to="/lion">lion</Link></li>
            <li><Link to="/zebra">zebra</Link></li>
          </ol>

        </nav>

        <Switch>
          <Route path="/giraffe">
            <Giraffe />
          </Route>
          <Route path="/lion">
            <Lion />
          </Route>
          <Route path="/zebra">
            <Zebra />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

