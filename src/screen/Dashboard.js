import React, {Component} from 'react'
import {Typography, IconButton} from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
// import { AddIcon, EditIcon } from '@material-ui/icons'
// import Search from '@material-ui/icons/Search'
//
class Dashboard extends Component {

    render(){
        return(
                <div style={styles.container}>
                    <div style={styles.box}>
                        <Fab size="large" color="primary" aria-label="add" style={{width: 100, height: 100}} onClick={window.location('SelectDate.js')}>
                            <AddIcon style={{fontSize: 50}} />
                        </Fab>
                        <Typography style={styles.text}>
                            Input data
                        </Typography>
                    </div>
                    <div style={styles.box}>
                        <Fab color="primary" aria-label="add" style={{width: 100, height: 100}} onClick={window.location('view_attendance.js')}>
                            <EditIcon style={{fontSize: 50}}/>
                        </Fab>
                        <Typography style={styles.text}>
                            View data
                        </Typography>
                    </div>
                </div>
        )
    }
}

const styles={
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#CFEDF8',
        width: '100%',
        height: window.innerHeight
    },
    box:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        height: '240px',
        marginLeft: '24',
        marginTop:'40',

    },
    icon:{
        size:60,
    },
    text:{
        marginTop:10,
        fontSize:32
    }
}

export default Dashboard