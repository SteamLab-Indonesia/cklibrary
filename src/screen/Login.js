import React, {Component} from 'react';
import {Button, TextField, Typography} from '@material-ui/core';
import GlobalStyles from '../styles';

class Login extends Component {

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.loginForm}>
                    <Typography>LOGIN</Typography>
                    <div style={styles.loginBox}>
                        <div style={styles.label}>
                            <Typography style={GlobalStyles.spacing}>Email</Typography>
                            <Typography style={GlobalStyles.spacing}>Password</Typography>
                        </div>
                        <div style={styles.textField}>
                            <TextField
                                style={GlobalStyles.spacing}
                                placeholder="Email address"
                            />
                            <TextField
                                type="password"
                                style={GlobalStyles.spacing}
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div>
                        <Button variant="contained" style={GlobalStyles.primaryBtn}>
                            Sign In
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: window.innerHeight * 0.9,
        backgroundColor: '#CFF8F5'
    },
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '350px',
        height: '240px',
    },
    loginBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },    
    label: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 12
    },
    textField: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20
    }
}
export default Login;