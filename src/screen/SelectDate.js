import React, {Component} from 'react'
import {Typography, FormControl, Select, RadioGroup, Radio, FormLabel, Button, MenuItem, FormControlLabel, TextField}from '@material-ui/core'
import GlobalStyles from '../styles';
import { addAttendance } from '../libs/firebase';

//
class SelectDate extends Component{

    state = {
        currentdate: new Date().toISOString().split('T')[0],
        day:'',
    }
    handleDate=(event)=>{
        this.setState({currentdate: event.target.value});
    }
    
    handleSubmit= () => {
        if (this.state.day == 'schoolday') {            
            this.props.history.push('/managestudents/'+ this.state.currentdate);
        }
        else if (this.state.day =='weekend') {
            
        }
        else if (this.state.day =='holiday') {
            
        }
        else{
            alert('Please fill in the form')
        }
        return(this.state.currentdate)
    }
    handleChange=(event)=>{
        this.setState({day: event.target.value})
    }

    render(){
        return(
            <div style={styles.container}>
                <div style={styles.selectbox}>
                    <Typography> Select Date:</Typography>
                    <TextField
                        type="date"
                        value={this.state.currentdate}
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
                            <FormControlLabel control={<Radio/>} id="School day" value="schoolday" label="School day"/>
                            <FormControlLabel control={<Radio/>} id="Weekends" value="weekend" label="Weekends"/>
                            <FormControlLabel control={<Radio/>} id="Holiday" value="holiday" label="Holiday"/>
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
