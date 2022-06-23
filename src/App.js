import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductListing} />
          <Route path='/product/:productId' exact component={ProductDetail} />
          <Route>Note found</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
