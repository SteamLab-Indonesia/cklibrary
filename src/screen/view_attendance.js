import React, {Component} from 'react'
import {Table, TableBody, TableCell, TableHead, TableRow, Icon, Button, TextField} from '@material-ui/core'
import GlobalStyles from '../styles';
import { getUser, callDate, ArrangeDate,firebase} from '../libs/firebase'


const gMonth=["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

function getDate(){
    let dateArray = [];
    for(let i = 1; i <= 31; ++i)
        dateArray.push(i);
    return dateArray;
}

class ViewAttendance extends Component{

    state = {
        startMonth: 0,
        attendance:[[]]
    }
    componentDidMount=()=>{
        ArrangeDate().then((data) => {
            this.setState({attendance:data})
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    render(){
        let attendance=this.state.attendance;
        let start = this.state.startMonth;
        let month = gMonth.slice(start, gMonth.length);
        let sliceAttendance = attendance.slice(start, gMonth.length);
        let dateArray = getDate();
        console.log('==> origin attendance');
        console.log(attendance);
        console.log('==> slice month');
        console.log(month);
        console.log('==> slice attendance');
        console.log(sliceAttendance);
        return(
            <div style={{marginTop: 80}}>
                <Table >
                   <TableHead>
                       <TableRow>
                           <TableCell>Date</TableCell>
                            {
                                month.map((item, index) => {
                                    return (
                                            <TableCell key={item}>{item}</TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            dateArray.map((item,date)=>{
                                return(
                                    <TableRow key={date}>
                                        <TableCell>
                                            {item}
                                        </TableCell>
                                        {
                                                month.map((item, index) => {
                                                if (sliceAttendance.length > 0 && sliceAttendance[index] &&
                                                    sliceAttendance[index][date] > 0)
                                                {
                                                    return (
                                                        <TableCell key={index}>{sliceAttendance[index][date]}</TableCell>
                                                    )
                                                }
                                                else{
                                                    return <TableCell key={index}/>
                                                }

                                            })
                                        }
                                    </TableRow>
                                )
                            })
                            
                        }
                    </TableBody>
                </Table>
            </div>
        )
    }
}
export default ViewAttendance;
