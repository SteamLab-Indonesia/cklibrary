import React, {Component} from 'react'
import {Table, TableBody, TableCell, TableHead, TableRow, Icon, Button, TextField} from '@material-ui/core'
import GlobalStyles from '../styles';
import { getUser} from '../libs/firebase'

const month=["july","august","september","october","november","december"]
const numberstudents = [20, 10, 5, 25, 15, 30];

getDate = () => {
    let dateArray = [];
    for(let i = 1; i <= 31; ++i)
        dateArray.push(i);
    return dateArray;
}
class ViewAttendance extends Component{

    render(){
        return(
            <div style={GlobalStyles.container}>
                <Table style={GlobalStyles.table}>
                   <TableHead style={GlobalStyles.tablehead}>
                       <TableRow>
                           <TableCell>Date</TableCell>
                            {
                                this.state.students.map((month) => {
                                    return (
                                            <TableCell>{month}</TableCell>
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
                                            numberstudents.map((atItem) => {
                                                return (
                                                    <TableCell>{atItem}</TableCell>
                                                )
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