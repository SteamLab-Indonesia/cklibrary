import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
	AppBar, 
	Toolbar, 
	Typography, 
	Button, 
	IconButton,
	Drawer,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from '@material-ui/core';
import { Menu, ChevronLeft, ChevronRight, MoveToInbox, Mail } from '@material-ui/icons/';

const drawerWidth = 240;

const styles = {
	root: {
	  flexGrow: 1,
	},
	grow: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginLeft: -12,
	  marginRight: 20,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	  },
	  drawerPaper: {
		width: drawerWidth,
	  },
	  drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		justifyContent: 'flex-end',
	},	
};

class Header extends Component {
	state = {
		open: false
	}
	handleDrawerClose = () => {
		this.setState({open: false})
	}
	handleDrawerOpen = () => {
		this.setState({open: true})
	}
    render() {
		let {open} = this.state;
		const {classes} = this.props;
        return (
            <div>
				<AppBar position="static">
					<Toolbar>
						<IconButton 
							className={classes.menuButton} color="inherit" 
							aria-label="Menu" onClick={this.handleDrawerOpen}
						>
							<Menu />
						</IconButton>
						<Typography variant="h6" color="inherit" className={classes.grow}>
							News
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeft />
						</IconButton>
					</div>
					<Divider />
					<List>
						{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
						<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
						<ListItemText primary={text} />
						</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
						<ListItemText primary={text} />
						</ListItem>
						))}
					</List>
				</Drawer>				
            </div>
        )
    }
}
export default withStyles(styles)(Header);