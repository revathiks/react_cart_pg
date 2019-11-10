import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
//import Home from './components/Home';
//import Register from './components/Register';
//import Login from './components/Login';
//import Users from './components/Users';
import Notfound from './components/Notfound';
import Products from './components/Products';

class App extends Component {
   constructor(props){
     super(props);
     this.state={
       page_title:"Create Account",
       footerTitle:"create Account"
     }   
   }
   setTitle= (title)=>
   {
     alert(title)
     this.setState({page_title:title})
   }

  render() {
    return (
      <Router>
      <div className="App">  
          <Header  />
          <div className="container" >
            <div className="row">              
              <Switch>
               {/* <Route exact path="/" component={Register} /> 
               <Route  path="/users" component={ () => <Users sendTitle={this.setTitle}/>} /> 
               <Route  path="/login" component={ () => <Login sendTitle={this.setTitle}/>} /> 
               <Route  path="/register" component={()=><Register sendTitle={this.setTitle}/>} />  */}
               <Route  exact path="/" component={()=><Products sendTitle={this.setTitle}/>} /> 
               <Route  path="" component={Notfound} />

             </Switch>              
            </div>
          </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
