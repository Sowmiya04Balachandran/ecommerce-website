
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainHeader from './Links/MainHeader';
import HomePage from './Pages/HomePage';
import StorePage from './Pages/StorePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProductDetail from './Product/ProductDetail';

const App = () => {
  // return (
  //   <Router>
  //     <div>
  //       <MainHeader />
  //       <main>
  //         <Route path="/home"><HomePage/></Route>
  //         <Route path="/store"><StorePage/></Route>
  //         <Route path="/about"><AboutPage/></Route>
  //         <Route path="/contact"><ContactPage/></Route>
  //         <Route path="/product/:productId"><ProductDetail/></Route>
  //       </main>
  //     </div>
  //   </Router>
  // );
  return (
    <Router>
      <div>
        <MainHeader />
        <main>
          <Route path="/home" component={HomePage} />
          <Route path="/store" component={StorePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/product/:productId" component={ProductDetail} /> {/* Dynamic route */}
        </main>
      </div>
    </Router>
  );
};

export default App;


