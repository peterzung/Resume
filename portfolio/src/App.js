import React, { Component } from 'react';
import { Typography, Avatar } from '@material-ui/core';
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
								backgroundColor: '#292828',
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
									marginLeft: 'auto',
									marginRight: 'auto'
								}}
							>
								<Avatar
									style={{
										width: '92px',
										height: '92px',
										marginTop: '4rem',
										border: 'solid 0.3rem #16a422'
									}}
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
