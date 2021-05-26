import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {Home} from '../components/routes/Home';
// import {Home, Robot, LoginPage, PageNotFound, MakeMapPage, RobotSet, Setting, Clean, Member, Support, AdminRobot, TableSetting} from '../routes';

class App extends Component {
    render(){ 
        return( 
              <BrowserRouter>
                <div>
                  <Switch>
                    <Route exact path='/' component={Home}/>
                  </Switch>
                </div>
              </BrowserRouter> 
        );
    }
}
export default App;