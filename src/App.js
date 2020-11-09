import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>
      <Header />
      <main className="container mt-16 mx-auto">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products/new" component={AddProduct} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
