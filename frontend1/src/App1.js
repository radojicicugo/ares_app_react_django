import React from 'react';
//import { Routes, Route, Link } from 'react-router-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import UpdateProduct from './components/UpdateProduct';
import DetailProduct from './components/DetailProduct';
import Home from './components/home/Home';
import Chat from './components/home/Chat';
import ShowProduct from './components/ShowProduct';

import AddProduct from './components/AddProduct';
import ShowDejan from './components/dejanGrujic/ShowDejan'
import AddDejan from './components/dejanGrujic/AddDejan';
import UpdateDejan from './components/dejanGrujic/UpdateDejan';
import DetailDejan from './components/dejanGrujic/DetailDejan';
import Pocetna from './components/home/Pocetna';
import Aktivni from './components/home/Aktivni';
import DnevniPlan from './components/home/DnevniPlan';
import MesecniPlan from './components/home/MesecniPlan';
import ShowJeremic from './components/jeremic/ShowJeremic'
import UgljesaLog from './loginImena/UgljesaLog';



function App(props) {
  return (

    <div className="App1">

      {/*<Router>
          <Switch>

         <Route exact path="/chat" component={Chat} />
         <Route exact path='/' component={Home}/>
         <Route exact path="/:id/" component={DetailProduct } />
         <Route exact path="/:id/update" component={UpdateProduct } />
         <Route exact path="/showproduct" component={ShowProduct } />
         <Route exact path="/addproduct" component={AddProduct } />
         <Route exact path="/showdejan" component={ShowDejan } />
         <Route exact path="/adddejan" component={AddDejan } />
         <Route exact path="/:id/update" component={UpdateDejan } />
         <Route exact path="/:id/" component={DetailDejan } />
         <Route exact path="/pocetna" component={Pocetna } />
         <Route exact path="/aktivni" component={Aktivni } />
         <Route exact path="/dnevniplan" component={DnevniPlan} />
         <Route exact path="/mesecniplan" component={MesecniPlan } />
         <Route exact path="/showjeremic" component={ShowJeremic } />
         <Route exact path="/ugljesalog" component={UgljesaLog } />
      
          </Switch>
  </Router>*/}

     {/* <Router>
           <Switch>
             <Route exact path="/chat" component={Chat} />
          
             <Route exact path="/:id/update" component={UpdateProduct} />
             <Route exact path="/:id/" component={DetailProduct} />
             <Route exact path="/home" component={Home} />
           </Switch>
  </Router>*/}

    </div>
  );
}

export default App1;
