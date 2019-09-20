import React, {Component} from 'react'
import {Typography, FormControl, Select, RadioGroup, Radio, FormLabel, Button, MenuItem, FormControlLabel, TextField}from '@material-ui/core'
import GlobalStyles from '../styles';

const time={
    date:[1,2,3,4,5,6,7,8,9,10],
    month:['January', 'February', 'March'],
    year:[2019,2020]}

class SelectDate extends Component{

    state = {
        day: 1,
        month: 1,
        year: 2019
    }
    handleDate=(event)=>{
        console.log('date = ' + event.target.value);
        this.setState({day: event.target.value});
    }

    handleMonth=(event)=>{
        console.log('month = ' + event.target.value);
        this.setState({month: event.target.value});
    }
    
    handleYear=(event)=>{
        console.log('year = ' + event.target.value);
        this.setState({year: event.target.value});
    }

    render(){
        return(
            <div style={styles.container}>
                <div style={styles.selectbox}>
                    <Typography> Select Date:</Typography>
                    <TextField
                        type="date"
                        value={this.state.clockDate}
                        style={GlobalStyles.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />                        
                </div>
                <div style={styles.daybox}>
                    <Typography>Day:</Typography>
                    <FormControl margin="normal">
                        <RadioGroup onChange={this.handleChange} color="primary">
                            <FormControlLabel control={<Radio/>} label="School day" value="schoolday"/>
                            <FormControlLabel control={<Radio/>} label="Saturday/Sunday" value="weekend"/>
                            <FormControlLabel control={<Radio/>} label="Holiday" value="holiday"/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <Button style={GlobalStyles.primaryBtn}>Submit</Button>
                </div>
            </div>
        )
    }

}
const styles={
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CFEDF8',
        height: window.innerHeight,
        
    },
    selectbox:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '350px',
        height: '100px',
    },
    daybox:{
        display: 'flex',
        flexDirection:"column",
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:'white',
        width: '350px',
        height: '240px',
    }

}

export default SelectDate;
