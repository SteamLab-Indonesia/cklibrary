import React, {Component} from 'react'
import {Table, TableBody, TableCell, TableHead, TableRow, Icon, Button, TextField} from '@material-ui/core'
import GlobalStyles from '../styles';
import { getUser, callDate, firebase} from '../libs/firebase'

const month=["july","august","september","october","november","december"]

function getDate(){
    let dateArray = [];
    for(let i = 1; i <= 31; ++i)
        dateArray.push(i);
    return dateArray;
}

class ViewAttendance extends Component{
    componenDidMount=()=>{
        callDate().then((data) => {
            // console.log(data)
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    render(){
        callDate().then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
        });
        
        return(
            <div >
                <Table >
                   <TableHead style={GlobalStyles.tablehead}>
                       <TableRow>
                           <TableCell>Date</TableCell>
                            {
                                month.map((item) => {
                                    return (
                                            <TableCell>{item}</TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            getDate().map((item) => {
                                return (
                                    <TableRow>
                                        <TableCell>{item}</TableCell>
                                        {
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
//