import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* Desktop View */}
				<Hidden xsDown>
					<Typography>Desktop</Typography>
				</Hidden>

				{/* Mobile view */}
				<Hidden smUp>
					<Typography>Mobile</Typography>
				</Hidden>
			</div>
		);
	}
}

export default App;
