import React, {Component} from 'react';
import {Button, TextField, Typography, Grid, withStyles} from '@material-ui/core';
import GlobalStyles from '../styles';

class Login extends Component {

    render() {
		const {classes} = this.props;

        return (
            <div style={styles.container}>
                <Grid 
					container 
					direction="column"
					justify="center" 
					alignItems="center"
					spacing={2}
					style={styles.loginForm}			
				>
					<Grid item>
						<Typography>ADMIN LOGIN</Typography>
					</Grid>
                    <Grid item>
						<Grid
							container
							direction="row"
							justify="center"
							alignItems="center"
							spacing={2}
						>
							<Grid item>
								<Grid
									container
									direction="column"
									justify="center"
									alignItems="center"
								>
									<Grid item>
										<Typography style={GlobalStyles.spacing}>Email</Typography>
									</Grid>
									<Grid item>
										<Typography style={GlobalStyles.spacing}>Password</Typography>
									</Grid>									
								</Grid>
							</Grid>
							<Grid item>
								<Grid
									container
									direction="column"
									justify="center"
									alignItems="center"	
									spacing={2}						
								>
									<Grid item>
										<TextField
											inputProps={{
												style: GlobalStyles.textField 
											}}
											fullWidth
											placeholder="Email address"
										/>
									</Grid>
									<Grid item>
										<TextField
											type="password"
											inputProps={{
												style: GlobalStyles.textField
											}}
											fullWidth
											placeholder="Password"
										/>
									</Grid>
								</Grid>
							</Grid>


						</Grid>
					</Grid>                    
					<Grid item>
                        <Button variant="contained" style={GlobalStyles.primaryBtn}>
                            Sign In
                        </Button>
					</Grid>
                </Grid>
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
		width: '100%',
        backgroundColor: '#CFF8F5'
    },
    loginForm: {
        backgroundColor: 'white',
        width: '400px',
        height: '240px',
    },
}
export default (Login);