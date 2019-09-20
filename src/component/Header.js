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
import PlusSign from '@material-ui/icon/post_add'
import Search from '@material-ui/icon/search'
import Exit from'@material-ui/icon/exit_to_app'

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
					<Toolbar variant="dense">
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
					{['Input data', 'View Data'].map((text, index) => (
						<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <PlusSign /> : <Search />}</ListItemIcon>
						<ListItemText primary={text} />
						</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{['Logout'].map((text, index) => (
						<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <Exit />}</ListItemIcon>
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
