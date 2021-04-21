import React, { createContext, useEffect, useState } from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./Components/Home/Home/Home";
import BookingList from "./Components/Dashboard/BookingList/BookingList";
import Review from "./Components/Dashboard/Review/Review";
import OrderList from "./Components/Dashboard/OrderList/OrderList";
import AddService from "./Components/Dashboard/AddService/AddService";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./Components/Dashboard/ManageServices/ManageServices";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute";
import Book from "./Components/Dashboard/Book/Book";



export const UserContext = createContext();
export const UserContext2 = createContext();

function App() {
  const [loggedInUser, setLoggedInUser]=useState({});
  let { name,email,token } = loggedInUser;
  const [isAdmin, setIsAdmin] = useState(false);
  const userEmail =sessionStorage.getItem('userEmail');
    if(userEmail !==  null){
        email= userEmail;
    }
    
    useEffect(() => {
        fetch('https://ancient-ocean-04359.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email:email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [email])
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <UserContext2.Provider value={[isAdmin,setIsAdmin]}> 
                <Router>
                        <Switch>
                               <Route path="/home">
                                        <Home/>
                                </Route>
                                <Route exact path="/">
                                        <Home/>
                                </Route>
                                <Route  path="/login">
                                        <Login></Login>
                                </Route>
                                {
                                        !isAdmin ? (<React.Fragment>
                                                        <PrivateRoute path="/booking/:serviceName">
                                                                        <Book/>
                                                        </PrivateRoute>
                                                        <PrivateRoute path="/book">
                                                                        <Book/>
                                                        </PrivateRoute>
                                                        <PrivateRoute path="/dashboard">
                                                                        <BookingList/>
                                                        </PrivateRoute>
                                                        <PrivateRoute path="/bookList">
                                                                <BookingList/>
                                                        </PrivateRoute>    
                                                        <PrivateRoute path="/review">
                                                                <Review/>
                                                        </PrivateRoute>
                                                 </React.Fragment>)
                                               : (<React.Fragment>
                                                        <PrivateRoute path="/dashboard">
                                                        <OrderList/>
                                                        </PrivateRoute>
                                                        <PrivateRoute path="/addService">
                                                                <AddService/>
                                                        </PrivateRoute>
                                                        <PrivateRoute path="/makeAdmin">
                                                                <MakeAdmin/>
                                                        </PrivateRoute>
                                                        <PrivateRoute path="/manageServices">
                                                                <ManageServices/>
                                                        </PrivateRoute>
                                                 </React.Fragment>)
                                }
                         </Switch>
                </Router>
         </UserContext2.Provider> 
    </UserContext.Provider>
  );
}

export default App;
