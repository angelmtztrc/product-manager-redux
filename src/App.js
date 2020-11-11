import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Store
import Store from './store';

// components
import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>
      <Provider store={Store}>
        <Header />
        <main className="container relative mt-16 mx-auto">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/products/new" component={AddProduct} />
            <Route exact path="/products/edit/:id" component={EditProduct} />
          </Switch>
        </main>
      </Provider>
    </Router>
  );
}

export default App;
