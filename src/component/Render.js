import React, {Component}from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import Navbar from './Navbar'
import Navigation from './Navigation'

class Render extends Component {
    render(){
    return(
        <div>
            <Navbar />
            <Navigation/>
        </div> 
    )
}}

export default Render
