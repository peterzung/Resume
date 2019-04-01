import React, { Component } from 'react';
import { Typography, Avatar } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import ScrollspyNav from 'react-scrollspy-nav';

const styles = {
	sidePane: {
		textAlign: 'center',
		backgroundColor: '#292828',
		position: 'fixed',
		top: 0,
		left: 0,
		display: 'flex',
		flexDirection: 'column',
		width: '12rem',
		height: '100vh'
	},
	sidePaneAvatar: {
		width: '92px',
		height: '92px',
		marginTop: '4rem',
		border: 'solid 0.3rem #16a422'
	},
	sidePaneLink: {
		fontWeight: '800',
		letterSpacing: '0.05rem',
		textTransform: 'uppercase'
	}
};

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* Desktop View */}
				<Hidden xsDown>
					{/* Side Pane */}
					<div style={styles.sidePane}>
						<div
							style={{
								marginLeft: 'auto',
								marginRight: 'auto'
							}}
						>
							{/* Profile image */}
							<Avatar
								style={styles.sidePaneAvatar}
								src="https://avatars1.githubusercontent.com/u/42393962?s=460&v=4"
								alt="Saud Tauqeer Profile image"
							/>
						</div>
						<div>
							<ScrollspyNav
								scrollTargetIds={[ 'about', 'skills', 'experience', 'projects', 'learning' ]}
								activeNavClass="is-active"
							>
								<a style={styles.sidePaneLink} href="#about">
									<Typography>About</Typography>
								</a>

								<a style={styles.sidePaneLink} href="#skills">
									Skills
								</a>

								<a style={styles.sidePaneLink} href="#experience">
									Experience
								</a>

								<a style={styles.sidePaneLink} href="#projects">
									Projects
								</a>

								<a style={styles.sidePaneLink} href="#learning">
									learning
								</a>
							</ScrollspyNav>
						</div>
					</div>
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
