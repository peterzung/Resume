import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* Desktop View */}
				<Hidden xsDown>
					<Typography component="h3" variant="h3">
						{/* Side Pane */}
						<div
							style={{
								backgroundColor: 'white',
								textAlign: 'center',
								position: 'fixed',
								top: 0,
								left: 0,
								display: 'flex',
								flexDirection: 'column',
								width: '12rem',
								height: '100vh'
							}}
						>
							<Typography>Hola</Typography>
						</div>
					</Typography>
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
