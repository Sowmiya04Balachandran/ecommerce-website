
import React ,{useContext} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainHeader from './Links/MainHeader';
import HomePage from './Pages/HomePage';
import StorePage from './Pages/StorePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProductDetail from './Product/ProductDetail';
import LoginPage from './Pages/LoginPage';
import AuthContext from './AuthContext/AuthContext';
//import Login from './Login/Login';


const App = () => {
  const authCtx=useContext(AuthContext);

  const isLoggedIn=authCtx.isLoggedIn;
  
  return (
    <Router>
      <div>
        <MainHeader />
        <main>
          <Route path='/' exact><HomePage/></Route>
          <Route path="/home" component={HomePage} exact />
          {isLoggedIn && <Route path="/store" exact> <StorePage/></Route>}
          <Route path="/about" component={AboutPage} />
          <Route path="/login">  <LoginPage /> </Route>
          <Route path="/contact" component={ContactPage} />
          <Route path="/product/:productId" component={ProductDetail} /> {/* Dynamic route */}
        </main>
      </div>
    </Router>
  );
};

export default App;


