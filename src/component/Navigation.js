import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Dashboard from '../screen/Dashboard'
import Attendance from '../screen/Attendance'
import Login from '../screen/Login'
import ManageStudent from '../screen/Managestudents'
import SelectDate from '../screen/SelectDate'
import ViewAttendance from '../screen/view_attendance'

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/selectdate' component={SelectDate}/>
                    <Route path='/managestudents' component={ManageStudent}/>
                    <Route path='/viewattendance' component={ViewAttendance}/>
                </Switch>
            </Router>

        )
    }
}

export default Navigation;