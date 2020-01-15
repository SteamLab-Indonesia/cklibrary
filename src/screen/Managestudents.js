import React, {Component} from 'react'
import {Table, Fab, TableBody, TableCell, TableHead, TableRow, Icon, Button, TextField} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {addStudent, getUser, getStudent, deleteStudent} from '../libs/firebase'


class Managestudents extends Component{

    state={
        open:false,
        students: [],
        new_name: '',
        new_class: ''
    }

    handleClickOpen =()=> {
        this.setState({open: true});
    }
    
    handleClose = () => {
        this.setState({open: false});
    }

    handleDelete=(student_id)=>{
        deleteStudent(student_id).then(() => {
            setTimeout(this.refreshData(), 2000);
        })
    }

    onAddName = (event) => {
        this.setState({
            new_name: event.target.value
        })
    }

    onAddClass = (event) => {
        this.setState({
            new_class: event.target.value
        })
    }

    onAddStudent = () => {
        console.log(this.state.new_name);
        console.log(this.state.new_class);
        addStudent(this.state.new_name, this.state.new_class);
        this.handleClose();
        setTimeout(this.refreshData(), 2000);
    }

    refreshData = () => {
        getStudent().then((studentData) => {
            this.setState({
                students: studentData
            })
        });
    }
    componentDidMount=()=>{
        this.refreshData();
    }

    render(){
        console.log(this.state.students);
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
                                <TableCell align="center">Action</TableCell>
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
                                            <TableCell>
                                                <Fab color="primary" size="small" aria-label="delete" onClick={()=>this.handleDelete(item.student_id)}>
                                                    <DeleteIcon />
                                                </Fab>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })

                            }
                        </TableBody>
                    </Table>
                </div>
                <div style={styles.iconarea}>
                    <Fab onClick={this.handleClickOpen} size="small">
                        <AddIcon />
                    </Fab>
                </div>
                <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Adding students</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Input name and class of students
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                        onChange={this.onAddName}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="class"
                        label="Class"
                        fullWidth
                        onChange={this.onAddClass}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.onAddStudent} color="primary">
                        Add
                    </Button>
                    </DialogActions>
                </Dialog>                
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

export default Managestudents;

