import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import OrderPage from './pages/OrderPage';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route  path="/login" component={LoginPage} />
        <Route exact path="/" component={Home} />
        <Route exact path="/order" component={OrderPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
