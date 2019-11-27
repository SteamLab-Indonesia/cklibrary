import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <Router>
              <ul style={styles.ulstyle}>
                  <li style={styles.listyle}><a style={styles.text}>CK Library System</a></li>
                  <li style={styles.listyle}><a href='/selectdate'><span style={styles.text}>Add Student</span></a></li>
                  <li style={styles.listyle}><a href='/viewattendance'><span style={styles.text}>View Student</span></a></li>
              </ul>
            </Router>
        )
    }
}

const styles={
    ulstyle: {
        listStyleType:'none',
        position: 'fixed',
        width: '100%',
        margin: 16,
        padding: 0,
        top: 0,
        margin: 0,
        overflow: 'hidden',
        backgroundColor: '#333',
      },
      listyle:{
        float: 'left',
      },
      text:{
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '16px',
      },
    hover: {
        backgroundColor: '#111',
      }
}

export default NavBar;