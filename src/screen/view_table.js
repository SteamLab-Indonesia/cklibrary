import React, {Component} from 'react'
import {Table, TableBody, TableCell, TableHead, TableRow, Icon, Button, TextField} from '@material-ui/core'
import GlobalStyles from '../styles';
import { getUser } from '../libs/firebase';

class StudentTable extends Component{

    componentDidMount = () => {
        getUser().then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render(){
        console.log('student table')
        return(
                <div style={GlobalStyles.container}>
                    <Table style={GlobalStyles.table}>
                        <TableHead style={GlobalStyles.tablehead}>
                            <TableRow>
                                <TableCell align="center">No.</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Class</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.students.map((item,index) => {
                                    return (
                                        <TableRow>
                                            <TableCell align="center">{index+1}</TableCell>
                                            <TableCell align="center">{item.name}</TableCell>
                                            <TableCell align="center">{item.class}</TableCell>
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

export default StudentTable
