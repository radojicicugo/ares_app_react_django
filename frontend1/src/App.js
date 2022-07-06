import React from 'react';
import { Routes, Route, Link, Switch, Router } from 'react-router-dom';

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import DejanLog from './loginImena/DejanLog';
import JeremicLog from './loginImena/JeremicLog';
import MarioLog from './loginImena/MarioLog';
import BorkoLog from './loginImena/BorkoLog';
import DincLog from './loginImena/DincLog';
import VladaLog from './loginImena/VladaLog';
import AngelovskiLog from './loginImena/AngelovskiLog';
import TomoLog from './loginImena/TomoLog';
import Agent001Log from './loginImena/Agent001Log';
import Agent002Log from './loginImena/Agent002Log';
import Agent003Log from './loginImena/Agent003Log';
import Agent004Log from './loginImena/Agent004Log';
import Agent005Log from './loginImena/Agent005Log';
import Agent006Log from './loginImena/Agent006Log';
import Agent007Log from './loginImena/Agent007Log';
import Agent008Log from './loginImena/Agent008Log';
import Agent009Log from './loginImena/Agent009Log';
import Agent10Log from './loginImena/Agent10Log';
import VaneLog from './loginImena/VaneLog';

import AddJeremic from './components/jeremic/AddJeremic';
import UpdateJeremic from './components/jeremic/UpdateJeremic';
import DetailJeremic from './components/jeremic/DetailJeremic';

import DetailBorko from './components/borko/DetailBorko';
import UpdateBorko from './components/borko/UpdateBorko';
import AddBorko from './components/borko/AddBorko';
import ShowBorko from './components/borko/ShowBorko';

import ShowDinc from './components/dinc/ShowDinc';
import UpdateDinc from './components/dinc/UpdateDinc';
import DetailDinc from './components/dinc/DetailDinc';
import AddDinc from './components/dinc/AddDinc';

import ShowAngelovski from './components/angelovski/ShowAngelovski';
import UpdateAngelovski from './components/angelovski/UpdateAngelovski';
import DetailAngelovski from './components/angelovski/DetailAngelovski';
import AddAngelovski from './components/angelovski/AddAngelovski';

import ShowTomo from './components/tomo/ShowTomo';
import UpdateTomo from './components/tomo/UpdateTomo';
import DetailTomo from './components/tomo/DetailTomo';
import AddTomo from './components/tomo/AddTomo';

import ShowMario from './components/mario/ShowMario';
import UpdateMario from './components/mario/UpdateMario';
import DetailMario from './components/mario/DetailMario';
import AddMario from './components/mario/AddMario';

import ShowVlada from './components/vlada/ShowVlada';
import UpdateVlada from './components/vlada/UpdateVlada';
import DetailVlada from './components/vlada/DetailVlada';
import AddVlada from './components/vlada/AddVlada';

import ShowAgent from './components/agent001/ShowAgent';
import UpdateAgent from './components/agent001/UpdateAgent';
import DetailAgent from './components/agent001/DetailAgent';
import AddAgent from './components/agent001/AddAgent';

import ShowAgent002 from './components/agent002/ShowAgent002';
import UpdateAgent002 from './components/agent002/UpdateAgent002';
import DetailAgent002 from './components/agent002/DetailAgent002';
import AddAgent002 from './components/agent002/AddAgent002';

import ShowAgent003 from './components/agent003/ShowAgent003';
import UpdateAgent003 from './components/agent003/UpdateAgent003';
import DetailAgent003 from './components/agent003/DetailAgent003';
import AddAgent003 from './components/agent003/AddAgent003';

import ShowAgent004 from './components/agent004/ShowAgent004';
import UpdateAgent004 from './components/agent004/UpdateAgent004';
import DetailAgent004 from './components/agent004/DetailAgent004';
import AddAgent004 from './components/agent004/AddAgent004';

import ShowAgent005 from './components/agent005/ShowAgent005';
import UpdateAgent005 from './components/agent005/UpdateAgent005';
import DetailAgent005 from './components/agent005/DetailAgent005';
import AddAgent005 from './components/agent005/AddAgent005';

import ShowAgent006 from './components/agent006/ShowAgent006';
import UpdateAgent006 from './components/agent006/UpdateAgent006';
import DetailAgent006 from './components/agent006/DetailAgent006';
import AddAgent006 from './components/agent006/AddAgent006';

import ShowAgent007 from './components/agent007/ShowAgent007';
import UpdateAgent007 from './components/agent007/UpdateAgent007';
import DetailAgent007 from './components/agent007/DetailAgent007';
import AddAgent007 from './components/agent007/AddAgent007';

import ShowAgent008 from './components/agent008/ShowAgent008';
import UpdateAgent008 from './components/agent008/UpdateAgent008';
import DetailAgent008 from './components/agent008/DetailAgent008';
import AddAgent008 from './components/agent008/AddAgent008';

import ShowAgent009 from './components/agent009/ShowAgent009';
import UpdateAgent009 from './components/agent009/UpdateAgent009';
import DetailAgent009 from './components/agent009/DetailAgent009';
import AddAgent009 from './components/agent009/AddAgent009';

import ShowAgent10 from './components/agent10/ShowAgent10';
import UpdateAgent10 from './components/agent10/UpdateAgent10';
import DetailAgent10 from './components/agent10/DetailAgent10';
import AddAgent10 from './components/agent10/AddAgent10';

import ShowVane from './components/vane/ShowVane';
import UpdateVane from './components/vane/UpdateVane';
import DetailVane from './components/vane/DetailVane';
import AddVane from './components/vane/AddVane';

import AktivniLog from './loginImena/AktivniLog';




function App(props) {
  return (

    <div className="App">

{/*<Router>
          <Switch>
         <Route exact path="/:id/detaildejan" component={DetailDejan} />

         <Route exact path="/chat" component={Chat} />
         <Route exact path='/' component={Home}/>
         <Route  path="/:id/" component={DetailProduct} />
         <Route exact path="/:id/update" component={UpdateProduct} />
         <Route exact path="/showproduct" component={ShowProduct} />
         <Route exact path="/addproduct" component={AddProduct} />
         <Route exact path="/showdejan" component={ShowDejan} />
         <Route exact path="/adddejan" component={AddDejan} />
         <Route exact path="/:id/update" component={UpdateDejan} />
         <Route exact path="/pocetna" component={Pocetna} />
         <Route exact path="/aktivni" component={Aktivni} />
         <Route exact path="/dnevniplan" component={DnevniPlan} />
         <Route exact path="/mesecniplan" component={MesecniPlan} />
         <Route exact path="/showjeremic" component={ShowJeremic} />
         <Route exact path="/ugljesalog" component={UgljesaLog} />
      
          </Switch>
  </Router>*/}

      <Routes>
         <Route path="/chat" element={<Chat />} />
         <Route path="/:id/detailproduct" element={<DetailProduct />} /> {/* Ovde treba resavati */}
         <Route path="/:id/updateproduct" element={<UpdateProduct />} />
         <Route path="/showproduct" element={<ShowProduct />} />
         <Route path="/addproduct" element={<AddProduct />} />
         <Route path="/showdejan" element={<ShowDejan />} />
         <Route path="/adddejan" element={<AddDejan />} />
         <Route path="/:id/updatedejan" element={<UpdateDejan />} />
         <Route path="/detaildejan" element={<DetailDejan />} />
         <Route path="/pocetna" element={<Pocetna />} />
         <Route path="/aktivni" element={<Aktivni />} />
         <Route path="/dnevniplan" element={<DnevniPlan />} />
         <Route path="/mesecniplan" element={<MesecniPlan />} />
         <Route path="/showjeremic" element={<ShowJeremic />} />

         <Route path="/ugljesalog" element={<UgljesaLog />} />
         <Route path="/dejanlog" element={<DejanLog />} />
         <Route path="/jeremiclog" element={<JeremicLog />} />
         <Route path="/mariolog" element={<MarioLog />} />
         <Route path="/angelovskilog" element={<AngelovskiLog />} />
         <Route path="/tomolog" element={<TomoLog />} />
         <Route path="/dinclog" element={<DincLog />} />
         <Route path="/vladalog" element={<VladaLog />} />
         <Route path="/borkolog" element={<BorkoLog />} />
         <Route path="/agent001log" element={<Agent001Log />} />
         <Route path="/agent002log" element={<Agent002Log />} />
         <Route path="/agent003log" element={<Agent003Log />} />
         <Route path="/agent004log" element={<Agent004Log />} />
         <Route path="/agent005log" element={<Agent005Log />} />
         <Route path="/agent006log" element={<Agent006Log />} />
         <Route path="/agent007log" element={<Agent007Log />} />
         <Route path="/agent008log" element={<Agent008Log />} />
         <Route path="/agent009log" element={<Agent009Log />} />
         <Route path="/agent10log" element={<Agent10Log />} />
         <Route path="/vanelog" element={<VaneLog />} />

         <Route path="/aktivnilog" element={<AktivniLog />} />

       
         <Route path="/addjeremic" element={<AddJeremic />} />
         <Route path="/:id/updatejeremic/" element={<UpdateJeremic />} /> {/* Ovde potraxiri ID reasenje   */}
         <Route path="/detailjeremic" element={<DetailJeremic/>} />
         {/* Ovde potraxiri ID reasenje   */}
         <Route path="/detailborko" element={<DetailBorko/>} />
         <Route path="/:id/updateborko" element={<UpdateBorko/>} />
         <Route path="/addborko" element={<AddBorko/>} />
         <Route path="/showborko" element={<ShowBorko/>} />

         <Route exact path='/:id/updatedinc' element={<UpdateDinc/>}/>
         <Route exact path='/:id/detaildinc/' element={<DetailDinc/>}/>
         <Route exact path='/showdinc' element={<ShowDinc/>}/>
         <Route exact path='adddinc' element={<AddDinc/>}/>

         <Route exact path='/:id/updatetomo' element={<UpdateTomo/>}/>
         <Route exact path='/:id/detailtomo/' element={<DetailTomo/>}/>
         <Route exact path='/showtomo' element={<ShowTomo/>}/>
         <Route exact path='/addtomo' element={<AddTomo/>}/>

         <Route exact path='/:id/updateangelovski' element={<UpdateAngelovski/>}/>
         <Route exact path='/:id/detailangelovski' element={<DetailAngelovski/>}/>
         <Route exact path='/showangelovski' element={<ShowAngelovski/>}/>
         <Route exact path='/addangelovski' element={<AddAngelovski/>}/>

         <Route exact path='/:id/updatemario' element={<UpdateMario/>}/>
         <Route exact path='/:id/detailmario/' element={<DetailMario/>}/>
         <Route exact path='/showmario' element={<ShowMario/>}/>
         <Route exact path='/addmario' element={<AddMario/>}/>

         <Route exact path='/:id/updatevlada' element={<UpdateVlada/>}/>
         <Route exact path='/:id/detailvlada/' element={<DetailVlada/>}/>
         <Route exact path='/showvlada' element={<ShowVlada/>}/>
         <Route exact path='/addvlada' element={<AddVlada/>}/>

         <Route exact path='/:id/updateagent001' element={<UpdateAgent/>}/>
         <Route exact path='/:id/detailagent001/' element={<DetailAgent/>}/>
         <Route exact path='/showagent001' element={<ShowAgent/>}/>
         <Route exact path='/addagent001' element={<AddAgent/>}/>

         <Route exact path='/:id/updateagent002' element={<UpdateAgent002/>}/>
         <Route exact path='/:id/detailagent002/' element={<DetailAgent002/>}/>
         <Route exact path='/showagent002' element={<ShowAgent002/>}/>
         <Route exact path='/addagent002' element={<AddAgent002/>}/>

         <Route exact path='/:id/updateagent003' element={<UpdateAgent003/>}/>
         <Route exact path='/:id/detailagent003/' element={<DetailAgent003/>}/>
         <Route exact path='/showagent003' element={<ShowAgent003/>}/>
         <Route exact path='/addagent003' element={<AddAgent003/>}/>

         <Route exact path='/:id/updateagent004' element={<UpdateAgent004/>}/>
         <Route exact path='/:id/detailagent004/' element={<DetailAgent004/>}/>
         <Route exact path='/showagent004' element={<ShowAgent004/>}/>
         <Route exact path='/addagent004' element={<AddAgent004/>}/>

         <Route exact path='/:id/updateagent005' element={<UpdateAgent005/>}/>
         <Route exact path='/:id/detailagent005/' element={<DetailAgent005/>}/>
         <Route exact path='/showagent005' element={<ShowAgent005/>}/>
         <Route exact path='/addagent005' element={<AddAgent005/>}/>

         <Route exact path='/:id/updateagent006' element={<UpdateAgent006/>}/>
         <Route exact path='/:id/detailagent006/' element={<DetailAgent006/>}/>
         <Route exact path='/showagent006' element={<ShowAgent006/>}/>
         <Route exact path='/addagent006' element={<AddAgent006/>}/>

         <Route exact path='/:id/updateagent007' element={<UpdateAgent007/>}/>
         <Route exact path='/:id/detailagent007/' element={<DetailAgent007/>}/>
         <Route exact path='/showagent007' element={<ShowAgent007/>}/>
         <Route exact path='/addagent007' element={<AddAgent007/>}/>
   
         <Route exact path='/:id/updateagent008' element={<UpdateAgent008/>}/>
         <Route exact path='/:id/detailagent008/' element={<DetailAgent008/>}/>
         <Route exact path='/showagent008' element={<ShowAgent008/>}/>
         <Route exact path='/addagent008' element={<AddAgent008/>}/>
   
         <Route exact path='/:id/updateagent009' element={<UpdateAgent009/>}/>
         <Route exact path='/:id/detailagent009/' element={<DetailAgent009/>}/>
         <Route exact path='/showagent009' element={<ShowAgent009/>}/>
         <Route exact path='/addagent009' element={<AddAgent009/>}/>

         <Route exact path='/:id/updateagent10' element={<UpdateAgent10/>}/>
         <Route exact path='/:id/detailagent10/' element={<DetailAgent10/>}/>
         <Route exact path='/showagent10' element={<ShowAgent10/>}/>
         <Route exact path='/addagent10' element={<AddAgent10/>}/>

         <Route exact path='/:id/updatevane' element={<UpdateVane/>}/>
         <Route exact path='/:id/detailvane/' element={<DetailVane/>}/>
         <Route exact path='/showvane' element={<ShowVane/>}/>
         <Route exact path='/addvane' element={<AddVane/>}/>

         <Route exact path='/' element={<Home/>}/>
  </Routes>
 

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

export default App;
