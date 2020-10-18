import React, { Component } from 'react';

import classes from './Layout.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false,
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: true });
	};

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !this.state.showSideDrawer };
		});
	};

	render() {
		return (
			<React.Fragment>
				<Toolbar toggleClicked={this.sideDrawerToggleHandler} />
				<SideDrawer
					show={this.state.showSideDrawer}
					closed={this.sideDrawerToggleHandler}
				/>
				<main className={classes.Content}>{this.props.children}</main>
			</React.Fragment>
		);
	}
}

export default Layout;