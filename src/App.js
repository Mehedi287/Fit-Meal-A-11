import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivetRote from './Components/PrivetRoute/PrivetRote';

import AuthProvider from './Context/AuthProvider';

import MyOrder from './Components/MyOrder/MyOrder';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import AddService from './Components/AddService/AddService';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import ContacrUs from './Components/ContactUs/ContacrUs';


function App() {
  return (
    <div className="App body">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivetRote path="/myOrders">
              <MyOrder></MyOrder>
            </PrivetRote>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRote path="/addservice">
              <AddService></AddService>
            </PrivetRote>
            <PrivetRote path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivetRote>
            <PrivetRote path="/manageOrder">
              <ManageOrders></ManageOrders>
            </PrivetRote>
            <Route path="/contact">
              <ContacrUs></ContacrUs>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;


