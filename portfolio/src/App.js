import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import { borders } from '@material-ui/system';

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
								backgroundColor: 'grey',
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
							<div
								style={{
									marginTop: '4rem'
								}}
							>
								<img
									width="100"
									src="https://avatars1.githubusercontent.com/u/42393962?s=460&v=4"
									alt="Saud Tauqeer Profile image"
								/>
							</div>
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
