import React from 'react';
import ReactDOM from 'react-dom';
import Login from './screen/Login2';
import Dashboard from './screen/Dashboard'
import SelectDate from './screen/SelectDate'
import Attendance from './screen/Attendance'
import Managestudents from './screen/Managestudents'
import Viewattendance from './screen/view_attendance'
import StudentTable from './screen/view_table'
import Render from './component/Render'
import {BrowserRouter} from 'react-router-dom';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Render/>
  </BrowserRouter>,
  document.getElementById('root')
);