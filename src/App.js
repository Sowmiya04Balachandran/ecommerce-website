
import React ,{useState} from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MainHeader from './Links/MainHeader';
import HomePage from './Pages/HomePage';
import StorePage from './Pages/StorePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProductDetail from './Product/ProductDetail';
import LoginPage from './Pages/LoginPage';
//import Login from './Login/Login';

const App = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const handleLogin=()=>{
    setUserIsLoggedIn(true);
  }

  const handleStore=()=>
  {
    setUserIsLoggedIn(false);
  }
 
  return (
    <Router>
      <div>
        <MainHeader />
        <main>
          <Route path='/' exact><HomePage/></Route>
          <Route path="/home" component={HomePage} exact />
          <Route path="/store" exact>{userIsLoggedIn ? <StorePage onLogout={handleStore}/> : <Redirect to={'/login'}/>}</Route>
          <Route path="/about" component={AboutPage} />
          <Route path="/login"> {userIsLoggedIn ? <Redirect to="/store" /> : <LoginPage onLogin={handleLogin} />}</Route>
          <Route path="/contact" component={ContactPage} />
          <Route path="/product/:productId" component={ProductDetail} /> {/* Dynamic route */}
        </main>
      </div>
    </Router>
  );
};

export default App;


