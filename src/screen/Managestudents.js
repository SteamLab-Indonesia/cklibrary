import React, {Component} from 'react'
import {Table, TableBody, TableCell, TableHead, TableRow, Icon, Button, TextField} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {addStudent, getUser, getStudent, deleteStudent} from '../libs/firebase'


class Managestudents extends Component{

    state={
        open:false
    }

    handleClickOpen =()=> {
        this.setState({open: true});
    }
    
    handleClose = () => {
        this.setState({open: false});
    }

    handleDelete=(student_id)=>{
        getStudent()
        deleteStudent()
    }

    componentDidMount=()=>{
        getUser()
    }

    render(){
        let open = this.state.open;
        return(
            <div>
                <div style={styles.container}>
                    <Table>
                        <TableHead>
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
                                            <TableCell>{index+1}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.class}</TableCell>
                                            <TouchableOpacity>
                                            <Icon icon={DeleteIcon} onClick={this.handleDelete}/>
                                            </TouchableOpacity>
                                        </TableRow>
                                    )
                                })

                            }
                        </TableBody>
                    </Table>
                </div>
                <div style={styles.iconarea}>
                    <TouchableOpacity onClick={this.handleClickOpen}>
                    <Icon icon={AddIcon} ></Icon>
                            <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Adding students</DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                Input name and class of students
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="grade"
                                label="grade"
                                type="grade"
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="grade"
                                label="grade"
                                type="grade"
                                fullWidth
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.addStudent} color="primary">
                                Add
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </TouchableOpacity>
                </div>
            </div>
        )
    }
}

const styles={
    container:{
        flexDirection:"column",
        width:window.innerHeight*0.85,
        justifyContent:"center",
        alignItems:"center"
    },
    iconarea:{
        flexDirection:"row",
        height:window.innerHeight*0.5,
        marginBottom:16,
        justifyContent:"center",
        alignItems:"flex-start"
    },
    icon:{
        size: 20,

    },
    table:{
        
    }
    
}

export default Managestudents
//