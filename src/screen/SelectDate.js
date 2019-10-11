import React, {Component} from 'react'
import {Typography, FormControl, Select, RadioGroup, Radio, FormLabel, Button, MenuItem, FormControlLabel, TextField}from '@material-ui/core'
import GlobalStyles from '../styles';
import { addAttendance } from '../libs/firebase';


class SelectDate extends Component{

    state = {
        date:[],
        day:''
    }
    handleDate=(event)=>{
        console.log('date = ' + event.target.value);
        this.setState({date: event.target.value});
    }
    
    handleSubmit(){
        if (date='School day') {
            addAttendance()
          }
        if (date='Weekends') {
            
        }
        if (date='Holiday') {
            
        }
        else{
            alert('Please fill in the form')
        }
    }
    handleChange=(event)=>{
        date=event.target.value
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
                        onChange={this.handleDate}
                    />                        
                </div>
                <div style={styles.daybox}>
                    <Typography>Day:</Typography>
                    <FormControl margin="normal">
                        <RadioGroup name="selectday"onChange={this.handleChange} color="primary">
                            <FormControlLabel control={<Radio/>} id="School day" value="schoolday"/>
                            <FormControlLabel control={<Radio/>} id="Weekends" value="weekend"/>
                            <FormControlLabel control={<Radio/>} id="Holiday" value="holiday"/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <Button style={GlobalStyles.primaryBtn} onClick={this.handleSubmit}>Submit</Button>
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
