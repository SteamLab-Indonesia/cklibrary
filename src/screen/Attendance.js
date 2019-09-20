import React, {Component} from 'react';
import {Button, TextField, Typography, Grid} from '@material-ui/core';
import GlobalStyles from '../styles';

class Attendance extends Component {

    state = {
        clockDate: '2019-09-07T14:00'
    }

    render() {
		const {classes} = this.props;

        return (
            <div style={styles.container}>
                <Grid 
					container 
					direction="column"
					justify="center" 
					alignItems="center"
					style={styles.form}
                    spacing={1}
				>
					<Grid item>
						<Typography>Clock In</Typography>
					</Grid>
                    <Grid item>
						<Grid
							container
							direction="row"
							justify="center"
							alignItems="center"
							spacing={3}
						>
							<Grid item>
								<Grid
									container
									direction="column"
									justify="center"
									alignItems="center"
								>
									<Grid item>
										<Typography style={GlobalStyles.spacing}>Time</Typography>
									</Grid>
									<Grid item>
										<Typography style={GlobalStyles.spacing}>Student</Typography>
									</Grid>		
									<Grid item>
										<Typography style={GlobalStyles.spacing}>Class</Typography>
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
                                            type="date"
                                            value={this.state.clockDate}
                                            style={GlobalStyles.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
									</Grid>
									<Grid item>
										<TextField
											inputProps={{
												style: GlobalStyles.textField
											}}
											fullWidth
											placeholder="Student Name"
										/>
									</Grid>                                    
									<Grid item>
										<TextField
											inputProps={{
												style: GlobalStyles.textField
											}}
											fullWidth
											placeholder="Grade"
										/>
									</Grid>
								</Grid>
							</Grid>


						</Grid>
					</Grid>                    
					<Grid item>
                        <Button variant="contained" style={GlobalStyles.primaryBtn}>
                            Submit
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
    form: {
        backgroundColor: 'white',
        width: '450px',
        height: '240px',
    },
}
export default Attendance;